import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 24px;
  text-align: center;
  color: #202020;
`;

export const Container = styled.div`
  max-width: 1140px;
  margin: 32px auto;
`;

export const GalleryLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
`;

export const GalleryThumbnail = styled.img`
  width: 100%;
  height: auto;
`;

export const AstronomyImage = styled.img`
  width: 100%;
  height: auto
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px 24px;
  color: #202020;
  font-size: 20px;
  font-weight: 600;
  border-radius: 8px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  transition: all .3s;
  &:hover {
    background-color: #efefef;
  }
  &:disabled {
    background-color: #efefef;
    color: #888;
  }
`;

export const ButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  margin: 8px 0;
`;

export const LoaderText = styled.p`
  margin: 0;
  font-size: 16px;
  text-align: center;
`;

export const PictureDetailsText = styled.p`
  margin: 8px 0;
  font-size: 16px;
  text-align: left;
  line-height: 1.5;
`;

