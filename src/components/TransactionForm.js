import React, { useState } from "react";


function TransactionForm({onAddTransaction}){
    const [formData,setFormData]=useState([]);

    function handleSubmit(e){
        e.preventDefault();
        onAddTransaction(formData);
        setFormData({ date: '', description: '', category: '', amount: '' });
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="date"
            name="date"
            onChange={handleChange}
            value={formData.date}
            required
            />
            <input 
            type="text"
            name="description"
            onChange={handleChange}
            value={formData.description}
            required
            />
            <input 
            type="text"
            name="category"
            onChange={handleChange}
            value={formData.category}
            required
            />
            <input 
            type="text"
            name="amount"
            onChange={handleChange}
            value={formData.amount}
            required
            />
            <button type="submit">Add Transaction</button>
        </form>
    )
}
export default TransactionForm;