import styled from "styled-components";

export const Time = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1px 8px;
`;

export const Thumbnail = styled.div`
  background-image: url(${({ item }) => item.snippet.thumbnails.medium.url});
  width: 320px;
  height: 180px;
  position: relative;
`;

export const Description = styled.div`
  overflow: hidden;
  line-height: 1em;
  height: 2em;
`;

export const Title = styled.h4`
  margin: 0.5em;
`;

export const Button = styled.button`
  background-color: white;
  color: rgb(109, 109, 109);
  font-size: 18px;
  padding: 0 10px;
  text-align: center;
  border: cadetblue solid 2px;
  &:hover {
    color: rgb(255, 255, 255);
    background-color: rgb(68, 68, 68);
    cursor: pointer;
    border: rgb(72, 121, 122) solid 2px;
  }
  &:disabled {
    background-color: rgb(218, 218, 218);
    color: aliceblue;
    border: rgb(173, 222, 223) solid 2px;
  }
`;

export const LikeBtn = styled.button`
  position: absolute;
  top: 5px;
  right: 21px;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  border: none;
  background-color: rgba(0%, 0%, 0%, 0.6);
  color: white;
  padding: 2px 2px;
  &:hover {
    background-color: rgba(0%, 0%, 0%);
    color: rgb(255, 255, 88);
    transition: 0.1s;
  }
`;

export const Video = styled.div`
  flex: 1;
  width: 320px;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

export const Videos = styled.div`
  flex-wrap: wrap;
  display: flex;
`;

export const Page = styled.div`
  margin-bottom: 30px;
`;

export const FiftyBtn = styled.div`
  margin: 30px 45px;
`;

export const Tags = styled.div`
  display: flex;
  margin: 20px;
`;

export const Tag = styled.div`
  font-size: 2em;
  font-weight: bold;
  padding: 0px 30px;
`;

export const Contain = styled.div`
  margin-left: 19px;
`;
