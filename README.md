## API endpoints

| APIs | VERB | Parameters | Description |
| --- | --- | --- | --- |
| /api/users | POST | (first_name, last_name, email, password) | SignUp |
| /auth/signin | POST | (email, password) | SignIn |
| /auth/userdata | GET | none | Profile Data |
| /api/products | GET | None | List of products |
| /api/products/:product_id | GET | (product_id) | A product |
| /api/products/:product_id/purchased | GET | (product_id) | Purchased Product content |
| /api/products/:product_id/reviews | POST | (body, rating) | Add a review to a product |
| /api/products/:product_id/reviews | DELETE | (none) | Delete a review from a product |
| /api/admin/products/ | POST | (name, price, description) | Create product |
| /api/admin/products/:product_id | PUT / DELETE | (product_id) | Update or delete product |
| /api/products/:product_id | POST | (product_id) | Add product to cart |
| /api/users/reset-password | POST | (email) | Issue new password via Mailgun |
| /api/account | GET | (none) | Account info |
| /api/account | PUT | (email, fisrt_name, last_name) | Update account info |
| /api/account/receipts | GET | (none) | User's receipts |
| /api/cart | GET | (none) | Get the cart |
| /api/cart | POST | (Product Id) | Add an product to cart |
| /api/cart/:id | DELETE | (Item Id) | Delete an item from cart |
| /api/payment/ | POST | (cart items array) | Purchase the items in the cart |

