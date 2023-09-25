import React, { useRef, useEffect } from 'react';
import { ScrollView } from 'react-native';

const DynamicFlatList = ({ data, renderItem, keyExtractor, onContentSizeChange, ...props }: any) => {
  const scrollViewRef: any = useRef(null);

  useEffect(() => {
    if (scrollViewRef?.current) {
        console.log("scrolling to end");
        setTimeout(() => {
            scrollViewRef?.current?.scrollToEnd({ animated: false });
        }, 100); // Add a small delay here, e.g., 100ms
    }
  }, [data, scrollViewRef.current]);

  return (
    <ScrollView
      ref={scrollViewRef}
      onContentSizeChange={onContentSizeChange}
      {...props}
    >
      {data.map((item: any, index: number) => (
        <React.Fragment key={keyExtractor(item, index)}>
          {renderItem({ item, index })}
        </React.Fragment>
      ))}
    </ScrollView>
  );
};

export default DynamicFlatList;
