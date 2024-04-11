import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const ITEMS_PER_PAGE = 10; // Số mục trên mỗi trang

const PaginationExample = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]); // Dữ liệu của bạn

  // Hàm để lấy dữ liệu cho trang hiện tại
  const getDataForPage = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return data.slice(startIndex, endIndex);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View>
      {/* Hiển thị dữ liệu của trang hiện tại */}
      {getDataForPage().map(item => (
        // <Text key={item.id}>{item.name}</Text>
        <Text></Text>
      ))}

      {/* Nút chuyển đến trang trước */}
      <Button title="Previous Page" onPress={handlePreviousPage} disabled={currentPage === 1} />

      {/* Hiển thị số trang hiện tại */}
      <Text>Page {currentPage}</Text>

      {/* Nút chuyển đến trang tiếp theo */}
      <Button title="Next Page" onPress={handleNextPage} disabled={currentPage * ITEMS_PER_PAGE >= data.length} />
    </View>
  );
};

export default PaginationExample;
