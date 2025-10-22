import axios from "axios";

export const uploadImage = async (img) => {
    if (!img) throw new Error('No image provided');

    // Use the actual file MIME type when requesting a signed URL and when uploading
    const contentType = img.type || 'image/jpeg';

    // Request a signed URL for the specific content type
    const resp = await axios.get(import.meta.env.VITE_SERVER_DOMAIN + "/get-upload-url", {
        params: { contentType }
    });

    const uploadURL = resp?.data?.uploadURL;
    if (!uploadURL) throw new Error('Failed to get upload URL');

    // Upload the raw file to the signed URL with matching Content-Type
    await axios.put(uploadURL, img, {
        headers: {
            'Content-Type': contentType
        }
    });

    // Return the public URL (strip query string)
    return uploadURL.split('?')[0];
}