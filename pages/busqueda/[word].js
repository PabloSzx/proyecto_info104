import { useState, useEffect } from "react";

export const getServerSideProps = async (ctx) => {
  const word = ctx.query.word;

  return {
    props: {
      word,
    },
  };
};

const SearchWord = (props) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`/api/search?word=${props.word}`).then((response) => {
      response.text().then((data) => {
        setData(data);
      });
    });
  }, []);
  return <div>{JSON.stringify(data)}</div>;
};

export default SearchWord;
