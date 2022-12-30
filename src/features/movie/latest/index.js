import React from 'react'
import styled from "@emotion/styled";
import useLatestMovie from './useLatestMovie';
import Card from '../../../Components/Card'

const Base = styled.div``;
const Title = styled.h4``;

function LatestMovieSection() {
    const { data, isLoading } = useLatestMovie();

  return (
    <Base>
    <Title>최근 개봉작</Title>
    {
        isLoading ? (
            <div>Loading...</div>
        ) : (
            <Card linkUrl={`/movie/${data.data.id}`}
        title={data.data.title}}/>
        )
    }
    </Base>
  )
}

export default LatestMovieSection;