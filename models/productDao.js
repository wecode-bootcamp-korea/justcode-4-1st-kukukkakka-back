const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getProductList = async () => {
  const product = await prisma.$queryRaw`
    SELECT p.id, p.name, p.description, p.image_url, p.price,
    s.name as sizename
    FROM products as p
    LEFT JOIN sizes as s
    ON p.size_id = s.id
 `;
  return await product;
};

const getDetailList = async (product_id) => {
  const detail = await prisma.$queryRaw`
  SELECT 
  p.id, 
  p.name, 
  p.description,
  p.image_url,
  p.price,

  JSON_ARRAYAGG(
    JSON_OBJECT(
      'id', add_option_id,
      'name', ao.name,
      'price', ao.price
    )
  ) AS options
  
  FROM products as p
  LEFT JOIN product_add_options as pao
  ON p.id = pao.product_id
  LEFT JOIN add_options as ao
  ON pao.add_option_id  = ao.id
  WHERE p.id = ${product_id}
  GROUP BY p.id`;

  return detail;
};

module.exports = { getProductList, getDetailList };
