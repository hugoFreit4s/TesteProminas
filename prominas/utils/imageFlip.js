import sharp from 'sharp';

async function mirrorAndSaveImage(imagePath) {
    try {
        const image = sharp(imagePath);
        const mirroredImageBuffer = await image.flip(true).toBuffer();
        await sharp(mirroredImageBuffer).toFile(imagePath);

        console.log('Ok');
    } catch (error) {
        console.error(error);
    }
}

export default mirrorAndSaveImage
