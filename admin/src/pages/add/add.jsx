import React from 'react';
import './add.css';
import { assets } from '../../assets/assets';

const Add = () => {
    return (
        <div className='add'>
            <form className='flex-col'>
                <div className='add-img-upload flex-col'>
                    <p>Upload Image</p>
                    <label htmlFor='image'>
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type='file' id='image' hidden required />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product name</p>
                    <input type='text' name='name' placeholder='Type here' />
                </div>
                <div className='add-product-description flex-col'>
                    <p>Product description</p>
                    <textarea name='description' rows='6' placeholder='Write content' required></textarea>
                </div>
                <div className="add-category-price">
                    <div className="add-category flex-col">
                        <p>Product category</p>
                        <select name="category">
                            <option value="Salad">Salad</option>
                            <option value="Rolls">Rolls</option>
                            <option value="Desserts">Desserts</option>
                            <option value="Sandwich">Sandw</option>
                            <option value="Pure Veg">Toys</option>
                            <option value="Pasta">Books</option>
                            <option value="Noodles">Books</option>
                        </select>
                    </div>
                    <div className="add-price flex-col">
                        <p>Product Price</p>
                        <input type='Number' name='price' placeorder='$20' />
                    </div>
                </div>
                <button type='submit' className='add-Button'>ADD</button>
            </form>
        </div>
    );
};

export default Add;