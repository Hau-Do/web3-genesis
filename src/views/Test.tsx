import { useContext, useEffect, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import { PolkadotContext } from 'contexts/Polkadot';
import { getAddressFromHash, getPreview, getSigner } from 'utils';

const Test = () => {
    console.log(process.env.NEXT_TEST_ENV_STRING);
    const { api, accounts } = useContext(PolkadotContext);

    const [preview, setPreview] = useState<any>({});
    const [data, setData] = useState<any>({});

    const uploadProtos = async () => {
        const address = accounts[0].address;
        const data = {
            characterName: 'The Scribe 123'
        };
        const signer = await getSigner(address);
        await api.setSigner(signer);
        const tx = api.tx.protos.upload(null, { text: 'json' }, ['nar_character'], null, null, JSON.stringify(data));
        tx.signAndSend(address, ({ events = [], status }) => {
            console.log('Transaction status:', status.type);

            if (status.isInBlock) {
                console.log('Included at block hash', status.asInBlock.toHex());
                console.log('Events:');

                events.forEach(({ event: { data, method, section }, phase }) => {
                    console.log('\t', phase.toString(), `: ${section}.${method}`, data.toString());
                });
            } else if (status.isFinalized) {
                console.log('Finalized block hash', status.asFinalized.toHex());
            }
        });
    };

    useEffect(() => {
        if (!api || !api?.query) return;
        (async () => {
            const params = api.createType('GetProtosParams', {
                desc: true,
                from: 0,
                limit: 8,
                metadata_keys: ['image', 'json_description', 'title'],
                available: true,
                tags: ['nar_character'],
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
                        [data.block]: data
                    }));
                    setPreview((prevState) => ({
                        ...prevState,
                        [data.block]: preview
                    }));
                });
            }
        })();
    }, [api]);

    return (
        <Box sx={{ mt: 11 }}>
            <Button onClick={uploadProtos} variant="contained" sx={{ my: 2 }} disabled={!api || !accounts[0]}>
                Upload Protos
            </Button>
            <Typography>Detail</Typography>
            <Box component="pre" sx={{ bgcolor: 'rgba(0, 0, 0, .25)', p: 2, borderRadius: 1 }}>
                {JSON.stringify(data, null, 2)}
            </Box>
            <Typography>Preview</Typography>
            <Box component="pre" sx={{ bgcolor: 'rgba(0, 0, 0, .25)', p: 2, borderRadius: 1 }}>
                {JSON.stringify(preview, null, 2)}
            </Box>
        </Box>
    );
};

export default Test;
