// all images imported from images directory
//T-shirt
import product_01_image_01 from '../images/product_01.jpg';
import product_01_image_02 from '../images/product_01.1.jpg';
import product_01_image_03 from '../images/product_01.3.jpg';
import product_05_image_01 from '../images/product_5.1.jpg';
import product_05_image_02 from '../images/product_5.2.jpg';
import product_05_image_03 from '../images/product_5.3.jpg';
import product_06_image_01 from '../images/product_6.1.jpg';
import product_06_image_02 from '../images/product_6.2.jpg';
import product_06_image_03 from '../images/product_6.3.jpg';
import product_10_image_01 from '../images/product_10.1.jpg';
import product_10_image_02 from '../images/product_10.2.jpg';
import product_10_image_03 from '../images/product_10.3.jpg';
import product_17_image_01 from '../images/product_17.1.jpg';
import product_17_image_02 from '../images/product_17.2.jpg';
import product_17_image_03 from '../images/product_17.3.jpg';

//Shirt
import product_02_image_01 from '../images/product_2.1.jpg';
import product_02_image_02 from '../images/product_2.2.jpg';
import product_02_image_03 from '../images/product_2.3.jpg';
import product_03_image_01 from '../images/product_3.1.jpg';
import product_03_image_02 from '../images/product_3.2.jpg';
import product_03_image_03 from '../images/product_3.3.jpg';
import product_04_image_01 from '../images/product_4.1.jpg';
import product_04_image_02 from '../images/product_4.2.jpg';
import product_04_image_03 from '../images/product_4.3.jpg';
import product_07_image_01 from '../images/product_7.1.jpg';
import product_07_image_02 from '../images/product_7.2.jpg';
import product_07_image_03 from '../images/product_7.3.jpg';
import product_08_image_01 from '../images/product_8.1.jpg';
import product_08_image_02 from '../images/product_8.2.jpg';
import product_08_image_03 from '../images/product_8.3.jpg';
import product_09_image_01 from '../images/product_9.1.jpg';
import product_09_image_02 from '../images/product_9.2.jpg';
import product_09_image_03 from '../images/product_9.3.jpg';

//Jacket
import product_14_image_01 from '../images/product_14.1.jpg';
import product_14_image_02 from '../images/product_14.2.jpg';
import product_14_image_03 from '../images/product_14.3.jpg';
import product_15_image_01 from '../images/product_15.1.jpg';
import product_15_image_02 from '../images/product_15.2.jpg';
import product_15_image_03 from '../images/product_15.3.jpg';
import product_16_image_01 from '../images/product_16.1.jpg';
import product_16_image_02 from '../images/product_16.2.jpg';
import product_16_image_03 from '../images/product_16.3.jpg';
//Dress
import product_11_image_01 from '../images/product_11.1.jpg';
import product_11_image_02 from '../images/product_11.2.jpg';
import product_11_image_03 from '../images/product_11.3.jpg';
import product_12_image_01 from '../images/product_12.1.jpg';
import product_12_image_02 from '../images/product_12.2.jpg';
import product_12_image_03 from '../images/product_12.3.jpg';
import product_13_image_01 from '../images/product_13.1.jpg';
import product_13_image_02 from '../images/product_13.2.jpg';
import product_13_image_03 from '../images/product_13.3.jpg';
import product_18_image_01 from '../images/product_18.1.jpg';
import product_18_image_02 from '../images/product_18.2.jpg';
import product_18_image_03 from '../images/product_18.3.jpg';
import product_19_image_01 from '../images/product_19.1.jpg';
import product_19_image_02 from '../images/product_19.2.jpg';
import product_19_image_03 from '../images/product_19.3.jpg';
const products = [
    {
        id: '01',
        title: 'Black T-Shirt',
        price: 12.03,
        priceOriginal: 15.2,
        imgUrl: product_01_image_01,
        image02: product_01_image_02,
        image03: product_01_image_03,
        category: 't-shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        quantity: 1,
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque. ',
    },

    {
        id: '02',
        title: 'Levent Shirt Green',
        price: 17.23,
        priceOriginal: 18.29,
        imgUrl: product_02_image_01,
        image02: product_02_image_02,
        image03: product_02_image_03,
        category: 'shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '03',
        title: 'Long Sleeve Shirt White',
        price: 17.54,
        priceOriginal: 18.12,
        imgUrl: product_03_image_01,
        image02: product_03_image_02,
        image03: product_03_image_03,
        category: 'shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '04',
        title: 'Long Sleeve Shirt Pink',
        price: 18.43,
        priceOriginal: 19.12,
        imgUrl: product_04_image_01,
        image02: product_04_image_02,
        image03: product_04_image_03,
        category: 'shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '05',
        title: 'Levents Popular Logo 2.0 T-shirt / Red',
        price: 13.0,
        priceOriginal: 15.6,
        imgUrl: product_05_image_01,
        image02: product_05_image_02,
        image03: product_05_image_03,
        category: 't-shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
    {
        id: '06',
        title: 'Levents Flower Cart Raglan White',
        price: 10.1,
        priceOriginal: 11.2,
        imgUrl: product_06_image_01,
        image02: product_06_image_02,
        image03: product_06_image_03,
        category: 't-shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '07',
        title: 'Blue short-sleeved shirt Korean western fashion',
        price: 17.26,
        priceOriginal: 17.89,
        imgUrl: product_07_image_01,
        image02: product_07_image_02,
        image03: product_07_image_03,
        category: 'shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '08',
        title: 'Long Sleeve Shirt Black',
        price: 15.23,
        priceOriginal: 16.29,
        imgUrl: product_08_image_02,
        image02: product_08_image_01,
        image03: product_08_image_03,
        category: 'shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '09',
        title: 'Long Sleeve Shirt Blue',
        price: 16.29,
        priceOriginal: 17.82,
        imgUrl: product_09_image_01,
        image02: product_09_image_02,
        image03: product_09_image_03,
        category: 'shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '10',
        title: 'Polo Regular/Black',
        price: 12.23,
        priceOriginal: 13.39,
        imgUrl: product_10_image_01,
        image02: product_10_image_02,
        image03: product_10_image_03,
        category: 't-shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '11',
        title: 'White short-sleeved square-neck iridescent dress',
        price: 18.03,
        priceOriginal: 19.12,
        imgUrl: product_11_image_01,
        image02: product_11_image_02,
        image03: product_11_image_03,
        category: 'dress',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '12',
        title: 'White AMIS Nude Dress H.I.U Fashion long-breasted dress',
        price: 16.39,
        priceOriginal: 17.23,
        imgUrl: product_12_image_01,
        image02: product_12_image_02,
        image03: product_12_image_03,
        category: 'dress',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },

    {
        id: '13',
        title: 'Dress black bib neck',
        price: 14.24,
        priceOriginal: 16.21,
        imgUrl: product_13_image_01,
        image02: product_13_image_02,
        image03: product_13_image_03,
        category: 'dress',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
    {
        id: '14',
        title: 'Sweater Blue',
        price: 16.29,
        priceOriginal: 17.82,
        imgUrl: product_14_image_01,
        image02: product_14_image_02,
        image03: product_14_image_03,
        category: 'jacket',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
    {
        id: '15',
        title: 'Sweater White',
        price: 16.54,
        priceOriginal: 17.23,
        imgUrl: product_15_image_01,
        image02: product_15_image_02,
        image03: product_15_image_03,
        category: 'jacket',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
    {
        id: '16',
        title: 'Zipper Hoodie Black',
        price: 17.12,
        priceOriginal: 18.92,
        imgUrl: product_16_image_01,
        image02: product_16_image_02,
        image03: product_16_image_03,
        category: 'jacket',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
    {
        id: '17',
        title: 'Dragon Karants Oversize KR72',
        price: 35.0,
        priceOriginal: 38.6,
        imgUrl: product_17_image_01,
        image02: product_17_image_02,
        image03: product_17_image_03,
        category: 't-shirt',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
    {
        id: '18',
        title: 'Green flower dress Elise',
        price: 20.02,
        priceOriginal: 21.6,
        imgUrl: product_18_image_01,
        image02: product_18_image_02,
        image03: product_18_image_03,
        category: 'dress',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
    {
        id: '19',
        title: 'White brocade dress Elise',
        price: 19.87,
        priceOriginal: 20.21,
        imgUrl: product_19_image_01,
        image02: product_19_image_02,
        image03: product_19_image_03,
        category: 'dress',
        shortDesc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.',
    },
];

export default products;
