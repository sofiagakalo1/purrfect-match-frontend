import styled from 'styled-components';

export const ContainerView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 44px 20px 16px 20px;
  min-width: 280px;
  @media ${props => props.theme.media.tab} {
    width: 681px;

    padding: 32px 32px 32px 32px;
  }
`;

export const PetCardData = styled.div`
  display: flex;
  flex-direction: column;
  @media ${props => props.theme.media.tab} {
    width: 100%;
  }
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 12px;
  width: 100%;
  @media ${props => props.theme.media.tab} {
    display: flex;
    flex-direction: row;
    margin-bottom: 28px;
  }
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.l};
  line-height: 33px;
  margin-bottom: 22px;
  color: ${props => props.theme.colors.yellow};
  @media ${props => props.theme.media.tab} {
    font-family: ${props => props.theme.fonts.main};
    font-style: normal;
    font-weight: ${props => props.theme.fontWeiths.bold};
    font-size: ${props => props.theme.fontSizes.xl};
    line-height: 38px;
    letter-spacing: -0.01em;
    color: ${props => props.theme.colors.yellow};
  }
`;

export const ButtonWrap = styled.div`
  @media ${props => props.theme.media.tab} {
    display: flex;
    width: 100%;
    justify-content: end;
  }
`;

export const PetImage = styled.img`
  object-fit: cover;
  width: 240px;
  height: 240px;
  border-radius: ${props =>
    ` 0px 0px ${props.theme.radius.normal} ${props.theme.radius.normal} `};

  margin-bottom: 12px;
  @media ${props => props.theme.media.tab} {
    width: 262px;
    height: 298px;
    margin-bottom: 0;
    margin-right: 24px;
  }
`;

export const ImageCategory = styled.p`
  position: absolute;
  width: 126px;
  height: 32px;
  left: 0;
  top: 16px;
  display: flex;
  padding: 11px 17px;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.yellow};
  background: ${props => props.theme.colors.lightBlue};
  border-radius: ${props =>
    ` 0px ${props.theme.radius.small} ${props.theme.radius.small}  0px `};
`;

export const PetDataListWrap = styled.div`
  width: 100%;
  @media ${props => props.theme.media.tab} {
    max-width: 321px;
  }
`;

export const PetDataList = styled.table`
  width: 100%;
`;

export const PetDataItem = styled.tr`
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const NameCategory = styled.th`
  text-align: start;
  font-family: ${props => props.theme.fonts.main};
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semiBold};
  font-size: 14px;
  line-height: 19.12px;
  color: ${props => props.theme.colors.yellow};
  width: 80px;
`;

export const ValueCategory = styled.th`
  text-align: start;
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16.39px;
  color: ${props => props.theme.colors.yellow};
`;

export const PetComents = styled.p`
  margin-bottom: 12px;
  color: ${props => props.theme.colors.yellow};
  @media ${props => props.theme.media.tab} {
    margin-bottom: 70px;
    color: ${props => props.theme.colors.yellow};
  }
`;

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 129px;
  height: 40px
  padding: 10px;

  font-family: ${props => props.theme.fonts.main};
  font-weight: ${props => props.theme.fontWeiths.bold};
  font-size: ${props => props.theme.fontSizes.s};
  line-height: 1.38;
  color: ${props => props.theme.colors.link};
 

border: 2px solid ${props => props.theme.colors.link};
border-radius: ${props => props.theme.radius.normal};

cursor: pointer;

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.backgroundModal};
    background: ${props => props.theme.colors.link};
  }
`;

export const ContactLinkItem = styled.a`
  font-style: normal;
  font-weight: ${props => props.theme.fontWeiths.semi};
  font-size: ${props => props.theme.fontSizes.xs};
  line-height: 16.39px;
  color: ${props => props.theme.colors.yellow};
  text-decoration-line: 'none';
  text-align: start;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.link};
    text-decoration-line: underline;
  }
`;

// color: ${props => props.theme.colors.textColor};
