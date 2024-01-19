import { test, describe, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';

import Test from '../../Test.vue';
import axios from 'axios';

import Products from '../Products.vue'

// mount is instanize a object.
// spyOn Should be before the mount.

describe('Test.vue', () => {

    describe('logic and data check', () => {
        const getProducts = vi.spyOn(axios, 'get');
        getProducts.mockReturnValue({ data: [
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
                }}]});
        const wrapper = mount(Test);

        test('product has been called once', () => {
            expect(getProducts).toHaveBeenCalledTimes(1);
        })

        test('product length', () => {
            expect(wrapper.vm.products.length).toBe(1)
        })

        test('product detail', () => {
            expect(wrapper.vm.products[0].title).toBe("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        })

    })

    describe('UI check', () => {
        test("message contains ", () => {
            const wrapper = mount(Test);
            const text = wrapper.find('h1.text-base').text()
            expect(text).toBe("IsRayNotArray")
        })
    })

    describe('Product component check', () => {
        test("Product exists in Test.vue?", () => {
            const wrapper = mount(Test, {
                global: {
                    components: {
                        Products
                    }
                }
            })
            expect(wrapper.findComponent(Products).exists()).toBe(true);

        })
    })
    
})