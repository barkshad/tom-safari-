
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
  } else {
    // Image specific
    params.push('fl_lossy'); // Allow lossy compression for images
  }

  const transformationString = params.join(',');

  return `${baseUrl}/upload/${transformationString}/${assetPath}`;
};

export const getPoster = (videoUrl: string | undefined) => {
    if (!videoUrl) return '';
    // Generate a poster image URL from the video URL
    if (videoUrl.includes('cloudinary.com')) {
        // Optimize the source first, then change extension
        const optimized = getOptimizedMedia(videoUrl, 'image', 600); // 600px width for thumbnails
        // Replace video extension with .jpg
        return optimized.replace(/\.[^/.]+$/, ".jpg");
    }
    return videoUrl; // Fallback
};
