import { useWindowVirtualizer } from '@tanstack/react-virtual';
import { FC, useEffect, useRef } from 'react';

import { DataItem } from '@/types/content';

import Progress from '@/components/Progress';
import Switcher from '@/components/Switcher';
import TopVideo from '@/components/TopVideo';

import appendVidazoo from '@/utils/appendVidazoo';
import useAutoScroll from '@/utils/useAutoScroll';
import useShowVideo from '@/utils/useShowVideo';

interface MapperProps {
  data: DataItem[];
}

const Virtualizer: FC<MapperProps> = ({ data }) => {
  const parentRef = useRef<HTMLDivElement | null>(null);
  useAutoScroll(parentRef);

  const virtualizer = useWindowVirtualizer({
    count: data.length,
    estimateSize: () => 35,
    overscan: 10,
    scrollMargin: parentRef.current?.offsetTop ?? 0,
  });
  const isShowVideo = useShowVideo();

  let offset = virtualizer.scrollOffset || 0;
  let size = virtualizer.getTotalSize();

  let scrollProgress = (offset / size) * 100;

  useEffect(() => {
    appendVidazoo('vidazoo');
  }, []);

  return (
    <>
      {!isShowVideo && <TopVideo />}
      <Progress width={scrollProgress} />
      <div ref={parentRef} className="scrollbar-custom">
        <div
          style={{
            height: `${virtualizer.getTotalSize()}px`,
            width: '100%',
            position: 'relative',
          }}
        >
          {virtualizer.getVirtualItems().map((virtualItem) => (
            <div
              key={virtualItem.key}
              ref={(el) => {
                if (el) {
                  virtualItem.measureElement(el);
                  new ResizeObserver(() => virtualItem.measureElement(el)).observe(el);
                }
              }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                transform: `translateY(${virtualItem.start}px)`,
              }}
            >
              <Switcher item={data[virtualItem.index]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Virtualizer;
