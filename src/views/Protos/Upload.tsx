import { useContext, useState } from 'react';

import Chip from '@mui/material/Chip';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import { getSigner, readFile } from 'utils';

import { PolkadotContext } from 'contexts/Polkadot';

const categorySource = {
    text: ['plain', 'json'],
    trait: ['(Vec<u32>, Vec<u32>, ShardsTrait)'],
    shards: ['edn', 'binary'],
    audio: ['oggFile', 'mp3File'],
    texture: ['pngFile', 'jpgFile'],
    vector: ['svgFile', 'ttfFile'],
    video: ['mkvFile', 'mp4File'],
    model: ['gltfFile', 'sdf', 'physicsCollider'],
    binary: ['wasmProgram', 'wasmReactor', 'blendFile']
};

const Upload = () => {
    const categories = Object.keys(categorySource);
    const { api, accounts } = useContext(PolkadotContext);

    const [data, setData] = useState<any>('');
    const [isUpload, setIsUpload] = useState<boolean>(false);
    const [category, setCategory] = useState(categories[0]);
    const [subCategory, setSubCategory] = useState(categorySource[categories[0]][0]);
    const [tag, setTag] = useState<string>('');
    const [tags, setTags] = useState<string[]>([]);
    const [file, setFile] = useState<any>();
    const [log, setLog] = useState<any>([]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCategory(event.target.value);
    };
    const handleSubChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSubCategory(event.target.value);
    };
    const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTag(event.target.value);
    };
    const handleChangeData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value);
    };
    const handleAddTag = () => {
        const isExist = tags.find((item) => item === tag);
        if (isExist) return;
        setTags((prevState) => [...prevState, tag]);
        setTag('');
    };
    const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsUpload(event.target.checked);
    };

    const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFile(event.target.files[0]);
    };

    const addLog = (log: string) => {
        setLog((prevState) => [...prevState, log]);
    };
    const removeTag = (tag: string) => {
        setTags((prevState) => {
            const index = prevState.findIndex((item) => item === tag);
            prevState.splice(index, 1);
            return [...prevState];
        });
    };

    // Convert ArrayBuffer to hexadecimal string
    const bufToHex = (buffer: ArrayBuffer) => {
        return Array.prototype.map
            .call(new Uint8Array(buffer), function (x) {
                return ('00' + x.toString(16)).slice(-2);
            })
            .join('');
    };

    const uploadProtos = async () => {
        const address = accounts[0].address;
        const signer = await getSigner(address);
        await api.setSigner(signer);
        const cat = { [category]: subCategory };
        const buffer = (await readFile(file)) as ArrayBuffer;
        const hex = bufToHex(buffer);

        const tx = api.tx.protos.upload(null, cat, tags, null, null, isUpload ? `0x${hex}` : JSON.stringify(data));
        tx.signAndSend(address, ({ events = [], status }) => {
            addLog(`Transaction status: ${status.type}`);
            if (status.isInBlock) {
                addLog(`Included at block hash: ${status.asInBlock.toHex()}`);
                addLog('Events:');
                events.forEach(({ event: { data, method, section }, phase }) => {
                    addLog(phase.toString());
                    addLog(`${section}.${method}`);
                    addLog(data.toString());
                });
            } else if (status.isFinalized) {
                addLog(`Finalized block hash: ${status.asFinalized.toHex()}`);
            }
        });
    };

    return (
        <Box sx={{ mt: 11, p: 2 }}>
            <TextField
                id="categories"
                select
                fullWidth
                label="Protos Categories"
                value={category}
                onChange={handleChange}
                margin="normal"
                SelectProps={{
                    native: true
                }}
                helperText="category: ProtosCategories"
            >
                {categories.map((option) => (
                    <option key={option} value={option}>
                        {option[0].toLocaleUpperCase()}
                        {option.substring(1, option.length)}
                    </option>
                ))}
            </TextField>
            <TextField
                id="sub-categories"
                select
                fullWidth
                label="Sub Categories"
                value={subCategory}
                onChange={handleSubChange}
                margin="normal"
                SelectProps={{
                    native: true
                }}
            >
                {categorySource[category].map((option) => (
                    <option key={option} value={option}>
                        {option[0].toLocaleUpperCase()}
                        {option.substring(1, option.length)}
                    </option>
                ))}
            </TextField>
            <Stack direction="row" sx={{ my: 2 }} spacing={2}>
                <TextField id="tag" fullWidth label="Tags" value={tag} onChange={handleTagChange} />
                <Button sx={{ maxWidth: 240, height: 56 }} fullWidth variant="contained" onClick={handleAddTag}>
                    Add Tag
                </Button>
            </Stack>
            {tags.length ? (
                <Card>
                    <CardContent>
                        {tags.map((item, idx) => {
                            return <Chip sx={{ mx: 0.25 }} key={idx} label={item} onDelete={() => removeTag(item)} />;
                        })}
                    </CardContent>
                </Card>
            ) : null}
            {isUpload ? (
                <Stack spacing={1}>
                    {file && (
                        <Card sx={{ my: 2 }}>
                            <CardContent>
                                <Stack component="code">
                                    <Stack direction="row" spacing={1}>
                                        <Typography>File Name:</Typography>
                                        <Typography>{file.name}</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                        <Typography>File Size:</Typography>
                                        <Typography>{file.size}</Typography>
                                    </Stack>
                                    <Stack direction="row" spacing={1}>
                                        <Typography>File Type:</Typography>
                                        <Typography>{file.type}</Typography>
                                    </Stack>
                                </Stack>
                            </CardContent>
                        </Card>
                    )}
                    <Button variant="contained" component="label" fullWidth size="large" sx={{ my: 2 }}>
                        Upload File
                        <input onChange={onFileChange} hidden accept="image/*" type="file" />
                    </Button>
                </Stack>
            ) : (
                <TextField
                    multiline
                    rows={5}
                    id="data"
                    margin="normal"
                    fullWidth
                    label="Data"
                    value={data}
                    onChange={handleChangeData}
                />
            )}
            <FormControlLabel
                sx={{ float: 'right' }}
                control={
                    <Switch checked={isUpload} onChange={handleSwitch} inputProps={{ 'aria-label': 'controlled' }} />
                }
                label="File Upload"
            />
            <Button
                onClick={uploadProtos}
                fullWidth
                size="large"
                variant="contained"
                sx={{ my: 2 }}
                disabled={!api || !accounts[0] || !tags.length || !category || !subCategory}
            >
                Upload Protos
            </Button>
            {log && (
                <Box component="pre" sx={{ bgcolor: 'rgba(0, 0, 0, .25)', p: 2, borderRadius: 1 }}>
                    {JSON.stringify(log, null, 2)}
                </Box>
            )}
        </Box>
    );
};

export default Upload;
