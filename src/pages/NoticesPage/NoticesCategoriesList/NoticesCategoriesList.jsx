import React, { useEffect, useState } from 'react';
import NoticeCategoryItem from '../NoticeCategoryItem/NoticeCategoryItem';

import { CollectionContainer } from './NoticesCategoriesList.styles.js';

import data from './data.json';

const NoticesCategoriesList = ({ categoryName }) => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const categoryNotices = data.filter(
      notice => notice.category === categoryName
    );

    const noticesWithImages = categoryNotices.map(notice => ({
      ...notice,
      imageUrl: `https://placekitten.com/${
        Math.floor(Math.random() * 1000) + 300
      }/${Math.floor(Math.random() * 1000) + 300}`,
    }));

    setNotices(noticesWithImages);
  }, [categoryName]);

  // useEffect(() => {
  //   const fetchNotices = async () => {
  //     try {
  //       const response = await fetch(`/api/notices?category=${categoryName}`);
  //       const data = await response.json();
  //       setNotices(data);
  //     } catch (error) {
  //       console.error('Error:', error);
  //     }
  //   };
  //   fetchNotices();
  // }, [categoryName]);

  return (
    <CollectionContainer>
      {notices.map(notice => (
        <NoticeCategoryItem key={notice.id} notice={notice} />
      ))}
    </CollectionContainer>
  );
};

export default NoticesCategoriesList;