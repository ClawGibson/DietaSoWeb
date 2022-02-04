import React, { useCallback, useEffect, useState } from 'react';

import { Upload, Modal, Progress, message } from 'antd';

import axios from 'axios';

const UploadImgs = ({ onChange, disabled, url }) => {
    const [ imageDetails, setImageDetails ] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        previewKeyName: '',
        fileList: [],
    });


    useEffect(() => {
        if (url) {
            setImageDetails({
                ...imageDetails,
                fileList: [
                    {
                        uid: '-1',
                        name: 'previewPicture.png',
                        status: 'done',
                        url: url,
                    },
                ],
            });
        }
    }, [ url ]);

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    }

    const formatFileName = (fileName) => {
        const date = new Date().toLocaleDateString().replace(/\//g, '');
        const randomString = Math.random().toString(36).substring(2, 7);

        const cleanFileName = fileName.toLowerCase().replace(/[^a-z0-9]/g, '-');
        let newFileName = `images/${date}-${randomString}-${cleanFileName}`;

        return newFileName.substring(0, 60);
    };

    const handleCancel = () =>
        setImageDetails({ ...imageDetails, previewVisible: false });

    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setImageDetails({
            ...imageDetails,
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle:
                file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    const handleChange = ({ file }) => {
        try {
            if (file.status === 'removed') {
                setImageDetails({ ...imageDetails, fileList: [] });
                //onChange('');
            } else if (file.status === 'uploading') {
                setImageDetails({ ...imageDetails, fileList: [ file ] });
            } else if (file.status === 'done') {
                setImageDetails({
                    ...imageDetails,
                    fileList: [ file ],
                    previewKeyName: file.response.key,
                });
                onChange(file.response.url);
            }
        } catch (error) {
            console.log(error);
        }
    };

    const uploadButton = <div className='uploadAvatar'>Subir</div>;

    const handleBeforeUpload = (file) => {
        const isJpgOrPng =
            file.type === 'image/jpeg' || file.type === 'image/png';

        if (!isJpgOrPng) {
            message.error(`${file.name} is not a png file`);
        }

        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }

        return isJpgOrPng && isLt2M;
    };

    const handleUpload = async ({ onSuccess, onError, onProgress, file }) => {
        try {
            const url =
                'https://api.cloudinary.com/v1_1/dwjv6orjf/image/upload';
            const formData = new FormData();
            formData.append('file', file);
            formData.append('upload_preset', 'dietaso');

            const config = {
                headers: { 'X-Requested-With': 'XMLHttpRequest' },
            };

            axios
                .post(url, formData, config)
                .then(({ data }) => {
                    console.log('Upload successful', data);

                    if (data.secure_url) {
                        console.log('Secure URL: ', data.secure_url);
                        console.log('->', data)
                        const response = {
                            key: data.delete_token,
                            url: data.secure_url,
                        };

                        setImageDetails({
                            ...imageDetails,
                            fileList: [ file ],
                            previewImage: data.secure_url,
                            previewKeyName: data.original_filename,
                        });
                        onChange(data.delete_token);
                        onSuccess(response, file);
                    }
                })
                .catch((err) => {
                    message.error('Error al subir la imagen', 5);
                    console.log('Error al subir la imagen:', err);
                    onError(err);
                });
        } catch (error) {
            console.groupCollapsed('Erorr al subir la imagen');
            console.log(error);
            console.groupEnd();
            onError(error);
            console.log(`[UPLOAD ERROR] ${error}`);
        }
    };

    const handleRemove = async (file) => {
        try {
            if (file.url) {
                return true;
            }

            if (imageDetails.previewKeyName === '') {
                return false;
            }
            //await Storage.remove(imageDetails.previewKeyName);
        } catch (error) {
            console.log(`Fallado ${error}`);
            return false;
        }
    };

    return (
        <>
            <Upload
                beforeUpload={handleBeforeUpload}
                customRequest={(e) => handleUpload(e)}
                disabled={disabled}
                listType='picture-card'
                maxCount={1}
                fileList={imageDetails.fileList}
                progress
                onPreview={handlePreview}
                onChange={handleChange}
                onRemove={handleRemove}>
                {imageDetails.fileList.length > 0 ? null : uploadButton}
            </Upload>
            {/*  <input type="file" onChange={(e) => setImageDetails({ ...imageDetails, fileList: [ e.target.files[ 0 ] ] })} /> */}
            <Modal
                width={'40rem'}
                visible={imageDetails.previewVisible}
                title={imageDetails.previewTitle}
                footer={null}
                centered
                onCancel={handleCancel}>
                <img
                    alt='example'
                    style={{ width: '100%', height: '100%' }}
                    src={imageDetails.previewImage}
                />
            </Modal>
        </>
    );
};

export default UploadImgs;