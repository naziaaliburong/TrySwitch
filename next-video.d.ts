// next-video.d.ts
declare module 'next-video' {
    import * as React from 'react';
  
    interface VideoProps {
      src: string;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
      controls?: boolean;
      style?: React.CSSProperties;
    }
  
    const Video: React.FC<VideoProps>;
    export default Video;
  }
  