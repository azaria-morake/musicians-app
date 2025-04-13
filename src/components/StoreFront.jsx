import React, { useState } from 'react';
import Layout from './Layout';
import {
  ProductsContainer,
  Header,
  ProductsGrid,
  ProductCard,
  ProductThumbnail,
  ProductDetails,
  ProductName,
  ProductDescription,
  ProductPrice,
  ColorOptions,
  ColorSwatch,
} from './StoreFrontStyles';
import { PageWrapper } from './HomepageStyles';
import { UpcomingGigsContainer } from './UpcomingGigsStyles';

const Products = () => {
  const [selectedColors, setSelectedColors] = useState({});

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Classic T-Shirt',
      description: '100% Cotton crew neck t-shirt',
      price: 'R399',
      colors: [
        { name: 'Red', image: '/store/items/img-4.png' },
        { name: 'Blue', image: '/store/items/img-5.png' },
        { name: 'Black', image: '/store/items/img-3.png' },
         ]
    },
    {
      id: 2,
      name: 'Hooded Sweatshirt',
      description: 'Premium cotton blend hoodie',
      price: 'R199',
      colors: [
        { name: 'Gray', image: 'store/items/img-0.png' },
        { name: 'Navy', image: '/store/items/img-1.png' },
        { name: 'Black', image: '/store/items/img-2.png' },
      ]
    },
  ];

  const handleColorSelect = (productId, colorIndex) => {
    setSelectedColors(prev => ({
      ...prev,
      [productId]: colorIndex
    }));
  };

  return (
    <Layout>
        <UpcomingGigsContainer>        <PageWrapper>
      <ProductsContainer>
        <Header>Zee's Collection</Header>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <ProductThumbnail 
                src={product.colors[selectedColors[product.id] || 0].image} 
                alt={product.name} 
              />
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductDescription>{product.description}</ProductDescription>
                
                <ColorOptions>
                  {product.colors.map((color, index) => (
                    <ColorSwatch 
                      key={color.name}
                      onClick={() => handleColorSelect(product.id, index)}
                      selected={selectedColors[product.id] === index}
                    >
                      <img src={color.image} alt={color.name} />
                    </ColorSwatch>
                  ))}
                </ColorOptions>

                <ProductPrice onClick={() => {/* Payment integration later */}}>
                  {product.price}
                </ProductPrice>
              </ProductDetails>
            </ProductCard>
          ))}
        </ProductsGrid>
      </ProductsContainer>
      </PageWrapper>
    </UpcomingGigsContainer>
    </Layout>
  );
};

export default Products;