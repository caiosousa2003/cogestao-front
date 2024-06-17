import { Card } from "antd";
import { styled } from 'styled-components';
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const { Meta } = Card;

export const ContainerCard = styled(Card)`
    width: 400px;
    height: 320px;
    font-family: 'Cabin', sans-serif;

    @media screen and (max-width: 544px) {
        width: 200px;
        height: 235px;
    }

    .ant-card-meta-title{
        max-width: 350.667px;
        word-wrap: break-word;
        @media screen and (max-width: 544px) {
            font-size: 12px;
            height: auto;
            max-width: 174.67px;
            white-space: normal;
        }
    }

    .ant-card-cover {
        padding: 30px;
        height: 210px;
        @media screen and (max-width: 544px) {
            padding: 15px;
            height: 130px;
        }
    }

    .ant-card-body{
        padding: 0px 24px 10px 24px;
        height: 110px;
        @media screen and (max-width: 544px) {
            padding: 0px 12px 5px 12px;
            height: 100px;
        }
    }

    .ant-card-meta-detail{
        height: 85px;
        @media screen and (max-width: 544px) {
            height: 87.5px;
        }
    }

    .ant-card-meta-description{
        max-width: 350.667px;
        word-wrap: break-word;
        @media screen and (max-width: 544px) {
            max-width: 174.67px;
            font-size: 10px;
        }
    }

`;

export const ContainerBackCard = styled(Meta)`
`;

export const ContainerIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    gap: 7px;
    margin-right: 5px;
    @media screen and (max-width: 544px) {
        gap: 3.5px;
        margin-right: 2.5px;
    }
`;

export const Image = styled.img`
    height: 150px;
    width: 340px;
    @media screen and (max-width: 544px) {
        height: 100px;
        width: 170px;
    }
`;

export const IconTrash = styled(FaTrashAlt)`
    height: 22px;
    width: auto;
    cursor: pointer;
    @media screen and (max-width: 544px) {
        height: 17px;
        width: auto;
    }
`;

export const IconEdit = styled(FaRegEdit)`
    height: 23px;
    width: auto;
    cursor: pointer;
    @media screen and (max-width: 544px) {
        height: 16px;
        width: auto;
    }
`;