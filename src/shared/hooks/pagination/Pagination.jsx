import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { ButtonPage, Flex, Box } from './Pagination.styles';
import Icon from 'shared/components/Icon';

const Pagination = () => {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);

  const { categoryName } = useParams();

  //   const [pages, setPages] = useState([]);
  const [totalPets, setTotalPets] = useState(0);

  const numberValue = page => Number(page);
  const pagesCount = Math.ceil(61 / 12);
  const pages =
    currentPage < 3
      ? Array.from({ length: 5 }, (_, index) => 1 + index)
      : Array.from({ length: 5 }, (_, index) => currentPage + index - 2);

  //   useEffect(() => {}, [currentPage]);

  useEffect(() => {
    // if (!cards) {
    //   return;
    // }
    const getCardsByPage = async (page = 1, category = 'sell') => {
      setIsFetching(true);
      try {
        const { data, headers } = await axios.get(
          `https://purrfect-match.onrender.com/api/notices`,
          {
            params: {
              page,
              category,
            },
          }
        );
        setCards([...data]);
        console.log(data, headers);
      } catch (error) {
        console.log(error);
      } finally {
        setIsFetching(false);
      }

      //   const count = numberValue(headers['x-total-count']);
      //   setTotalPets(count);

      return;
    };
    getCardsByPage(currentPage, categoryName);
  }, [currentPage]);
  //   const getPetBySerch = async (title, category = 'sell') => {
  //     const { data } = await axios.get(
  //       'https://purrfect-match.onrender.com/api/notices',
  //       {
  //         params: {
  //           title,
  //           category,
  //         },
  //       }
  //     );
  //     return console.log(data);
  //   };

  const handleClick = ({ target }) => {
    const numberPage = numberValue(target.id);
    if (currentPage === numberPage) {
      return;
    }
    setCurrentPage(numberPage);
    console.log(numberPage);
  };
  const arrowHandleDecr = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(prev => prev - 1);
    console.log(currentPage);
  };

  const arrowHandleIncr = () => {
    setCurrentPage(prev => prev + 1);
    console.log(currentPage);
  };

  return (
    <Box>
      <Flex>
        <ButtonPage id="prev" onClick={arrowHandleDecr}>
          <Icon id="arrow-left" s="#54ADFF" f="#54ADFF"></Icon>
        </ButtonPage>
        {pages.map(page => (
          <ButtonPage
            key={page}
            className={page === currentPage && 'current_page'}
            id={page}
            onClick={handleClick}
          >
            {page}
          </ButtonPage>
        ))}
        {pagesCount > 5 && (
          <ButtonPage id="next" onClick={arrowHandleIncr}>
            <Icon
              id="arrow-left"
              s="#54ADFF"
              f="#54ADFF"
              style={{ transform: 'rotate(180deg)' }}
            ></Icon>
          </ButtonPage>
        )}
      </Flex>
    </Box>
  );
};

export default Pagination;
