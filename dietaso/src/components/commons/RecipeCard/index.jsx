import React, { useState, useEffect } from 'react';
import { Card } from 'antd';
import YouTube from '@u-wave/react-youtube';

import UploadImgs from '../../commons/UploadImgs';
import HeaderTitle from './components/Header';
import { getUrlsID } from '../../../utils';
import styles from './RecipesCard.module.scss';

const RecipesCard = ({ recipe, onEdit, onDelete, onUploadImg }) => {
    const [url, setUrl] = useState(recipe?.foto ?? '');
    const [key, setKey] = useState('');

    const onUploadImgDisabled = recipe?.foto;
    const recipePhotoUrl = recipe?.foto ?? url;
    const description = recipe?.descripcion ?? 'Aún no hay información';

    useEffect(() => {
        return () => {
            setKey('');
            setUrl('');
        };
    }, []);

    const isStar = (recipe) => {
        return recipe ? '★ Receta destacada' : '';
    };

    const onUpload = (values) => {
        setUrl(values.url);
        setKey(values.key);
        onUploadImg(values);
    };

    return (
        <Card className={styles.container} title={<HeaderTitle recipe={recipe} onEdit={onEdit} onDelete={onDelete} />}>
            <UploadImgs disabled={onUploadImgDisabled} onChange={onUpload} url={recipePhotoUrl} />
            <div>
                <YouTube video={getUrlsID(recipe.url)} autoplay={false} />
            </div>
            <div>{`${isStar(recipe.destacado)}`}</div>
            <div>{description}</div>
        </Card>
    );
};

export default RecipesCard;
