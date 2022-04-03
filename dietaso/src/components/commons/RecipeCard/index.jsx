import React, { useState, useEffect } from 'react';

import { Card, Row, Col, Button } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import YouTube from '@u-wave/react-youtube';

import UploadImgs from '../../commons/UploadImgs';

const RecipesCard = ({ recipe, onEdit, onDelete, onUploadImg }) => {
    const [url, setUrl] = useState(recipe?.foto ?? '');
    const [key, setKey] = useState('');

    useEffect(() => {
        return () => {
            setKey('');
            setUrl('');
        };
    }, []);

    const isStar = (recipe) => {
        return recipe ? '★ Receta destacada' : '';
    };

    const getUrlsID = (URL) => {
        const ID = URL.match(
            /(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/
        );
        if (ID !== null) {
            //console.log(ID[1]);
            //setVideosData([...videosData, { id: 2, link: ID[1] }]);
            return ID[1];
        } else {
            console.log('The youtube url is not valid');
        }
    };

    const onUpload = (values) => {
        setUrl(values.url);
        setKey(values.key);
        onUploadImg(values);
    };

    return (
        <Card
            title={
                <Row>
                    <Col span={18} style={{ padding: 5 }}>
                        {recipe.titulo}
                    </Col>
                    <Col>
                        <Button
                            style={{}}
                            type='primary'
                            shape='circle'
                            icon={<EditOutlined />}
                            onClick={() => onEdit(recipe)}
                        />
                    </Col>
                    <Col>
                        <Button
                            style={{}}
                            type='primary'
                            shape='circle'
                            icon={<DeleteOutlined />}
                            onClick={() => onDelete(recipe)}
                        />
                    </Col>
                </Row>
            }>
            <UploadImgs
                disabled={recipe?.foto ? true : false}
                onChange={onUpload}
                url={recipe?.foto ?? url}
            />
            <div>
                <YouTube video={getUrlsID(recipe.url)} autoplay={false} />
            </div>
            <div className='sc_recipes_destacado'>
                {`${isStar(recipe.destacado)}`}
            </div>
            <div>{recipe?.descripcion ?? 'Aún no hay información'}</div>
        </Card>
    );
};

export default RecipesCard;
