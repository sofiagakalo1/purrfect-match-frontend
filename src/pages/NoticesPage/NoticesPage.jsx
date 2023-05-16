import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useAuth from 'shared/hooks/useAuth';

import NoticesFilters from './NoticesFilters/NoticesFilters';
import NoticesSearch from './NoticesSearch';
import NoticesCategoriesNav from './NoticesCategoriesNav/NoticesCategoriesNav';
import NoticesCategoriesList from './NoticesCategoriesList/NoticesCategoriesList';

import Button from 'shared/components/Button';
import CircleButton from 'shared/components/CircleButton/CircleButton';
import Container from 'shared/components/Container';
import Icon from 'shared/components/Icon/Icon';
import { useMedia } from 'shared/hooks/useMedia';

import axios from 'axios';

export const getPetBySerch = async (category = 'sell', title, page = 1) => {
  const { data } = await axios.get(
    'https://purrfect-match.onrender.com/api/notices',
    {
      params: {
        category,
        title,
        page,
      },
    }
  );
  return data;
};

function NoticesPage() {
  const isUpToWidth480 = useMedia(['(max-width: 480px)'], [true], false);

  const { categoryName } = useParams();

  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const handleAddPet = () => {
    isLoggedIn
      ? navigate('/add-pet')
      : alert('Please register or sign in to be able to add pet');
  };
  // тимчасове апі для пошуку , далі буде імпортована ф-ція апі

  return (
    <Container>
      <NoticesSearch />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '43px',
        }}
      >
        <NoticesCategoriesNav />
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <NoticesFilters />
          {isUpToWidth480 ? (
            <CircleButton
              style={{
                zIndex: '999',
                position: 'fixed',
                bottom: '50px',
                right: '24px',
              }}
              onClick={handleAddPet}
              disabled={!isLoggedIn}
            />
          ) : (
            <Button onClick={handleAddPet}>
              Add pet
              <Icon id="plus-small" />
            </Button>
          )}
        </div>
      </div>

      <NoticesCategoriesList categoryName={categoryName} />
    </Container>
  );
}

export default NoticesPage;
