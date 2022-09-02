import { Box, Card, CardContent, Grid, Stack, Typography } from '@mui/material';
import { PolkadotContext } from 'contexts/Polkadot';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { getAddressFromHash, getPreview } from 'utils';

const Worlds = () => {
    const [data, setData] = useState<any>({});
    const { api } = useContext(PolkadotContext);
    useEffect(() => {
        if (!api || !api?.query) return;
        (async () => {
            const params = api.createType('GetProtosParams', {
                desc: true,
                from: 0,
                limit: 8,
                metadata_keys: ['image', 'json_description', 'title'],
                available: true,
                tags: ['nar_worldKey'],
                return_owners: true
            });
            const result = await api.rpc.protos.getProtos(params);
            const protoses = JSON.parse(result.toJSON());
            for (const protos in protoses) {
                const hash = `0x${protos}`;
                api.query.protos.protos(hash).then(async (result: any) => {
                    const data = result.toJSON();
                    const address = getAddressFromHash(protos);
                    const preview = await getPreview(address);
                    setData((prevState) => ({
                        ...prevState,
                        [data.block]: {
                            hash: hash,
                            ...preview,
                            ...data
                        }
                    }));
                });
            }
        })();
    }, [api]);

    return (
        <Box sx={{ mt: 11, p: 2 }}>
            <Grid container spacing={2}>
                {Object.values(data).map((item: any) => {
                    return (
                        <Grid key={item.block} item xs={12} sm={3}>
                            <Link href={`/world/${item.hash}`}>
                                <Card>
                                    <CardContent>
                                        <Stack spacing={2}>
                                            <Typography variant="caption" textAlign="right">
                                                {item.block}
                                            </Typography>
                                            <Typography variant="h6" textAlign="center">
                                                {item.name}
                                            </Typography>
                                            <Typography
                                                component="code"
                                                sx={{ bgcolor: 'rgba(0, 0, 0, .25)', p: 2, borderRadius: 1 }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Stack>
                                    </CardContent>
                                </Card>
                            </Link>
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default Worlds;
