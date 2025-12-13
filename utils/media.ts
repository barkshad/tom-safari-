
export const getOptimizedMedia = (url: string | undefined, type: 'image' | 'video' = 'image', width: string | number = 'auto') => {
  if (!url) return '';
  if (!url.includes('cloudinary.com')) return url;

  // Split URL to inject transformations
  // Handles both /upload/v1234/ and /upload/
  const parts = url.split(/\/upload\//);
  if (parts.length < 2) return url;

  const baseUrl = parts[0];
  const assetPath = parts[1];

  // Base transformations
  const params = ['f_auto', 'q_auto'];

  // Width resizing
  if (width !== 'auto') {
    params.push(`w_${width}`);
  }

  // Type specific optimizations
  if (type === 'video') {
    params.push('vc_auto'); // Video codec auto (h264/h265/vp9)
    params.push('br_auto'); // Bitrate auto
    // Image specific
  } else {
    params.push('fl_lossy'); // Allow lossy compression for images
  }

  const transformationString = params.join(',');
  let finalUrl = `${baseUrl}/upload/${transformationString}/${assetPath}`;

  // FORCE MP4 EXTENSION FOR VIDEOS
  // Browsers get confused if the URL ends in .mov even if headers are correct
  if (type === 'video') {
      finalUrl = finalUrl.replace(/\.[^/.]+$/, ".mp4");
  }

  return finalUrl;
};

export const getPoster = (videoUrl: string | undefined) => {
    if (!videoUrl) return '';
    // Generate a poster image URL from the video URL
    if (videoUrl.includes('cloudinary.com')) {
        // Optimize the source first, then change extension
        // We use the original function but force image type to get image optimizations
        const optimized = getOptimizedMedia(videoUrl, 'image', 600); 
        // Replace video extension with .jpg
        return optimized.replace(/\.[^/.]+$/, ".jpg");
    }
    return videoUrl; // Fallback
};
