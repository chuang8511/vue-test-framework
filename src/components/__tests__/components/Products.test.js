import { test, describe, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import Products from '@/components/Products.vue'

describe('Product.vue', () =>{
    const wrapper = mount(Products, {
        props: {
            products: [
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                  }
            ]
        }
    });
    describe("check data", () => { 
        test("If items is correct", () => {
            const items = wrapper.findAll('li');
            expect(items.length).toBe(1);
            expect(items[0].text()).toBe("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        });
    })
    
    describe("check user behavior", () => {
        test('click btn', () => {
            const mockAlert = vi.fn();
            window.alert = mockAlert;
            const button = wrapper.find('.btn-alert');
            button.trigger('click');
            expect(mockAlert).toBeCalledWith('Please do not do that')
        });
    });
});
// const wrapper = mount(Test,)