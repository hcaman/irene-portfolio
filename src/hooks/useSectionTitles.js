import { useState, useEffect, useMemo } from 'react';

export const useSectionTitles = (titleNodes, defaultTitles) => {
  const initValues = {
    sectionName: '',
    mainTitle: '',
    littleTitle: '',
  }
  const [data, setData] = useState(initValues);
  
  const opts = useMemo(() => {
    const { section, mainTitle, littleTitle } = titleNodes[0];
    return {
      sectionName: JSON.parse(section)[0] || defaultTitles.sectionD,
      mainTitle: mainTitle || defaultTitles.mainTitleD,
      littleTitle: littleTitle || defaultTitles.littleTitleD,
    }
  }, [ titleNodes, defaultTitles.sectionD, defaultTitles.mainTitleD, defaultTitles.littleTitleD ]);
  
  useEffect(() => {
    setData(opts);
  }, [opts]);

  return data;
};
