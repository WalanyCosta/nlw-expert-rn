import { Product } from '@/components/product';
import { ProductProps } from '@/utils/data/products';
import { create } from 'zustand'
import * as cartInMemory from '@/stores/helpers/cart-in-memory'

export interface ProductCartProps extends ProductProps {
    quantity: number
}

interface StateProps {
    products: ProductCartProps[]
    add: (product: ProductProps) => void
}

export const useCartStore = create<StateProps>((set) => ({
    products: [],

    add: (product: ProductProps) => set((state)=> ({
        products: cartInMemory.add(state.products, product)
    }))
}))