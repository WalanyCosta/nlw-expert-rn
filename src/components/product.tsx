import { View, Text, TouchableOpacity, TouchableOpacityProps, Image, ImageProps } from 'react-native'
import { forwardRef } from 'react'

interface ProductProps extends TouchableOpacityProps {
    data: {
        title: string,
        description: string
        thumbnail: ImageProps
        quantity?: number
    }
}

export const Product = forwardRef<TouchableOpacity, ProductProps>(({data, ...rest}, ref) => {
  return (
    <TouchableOpacity
        ref={ref}
        className='w-full flex-row items-center pb-4'
        {...rest}
    >
        <Image
            className='w-20 h-20 rounded-md'
            source={data.thumbnail} 
        />

        <View className='flex-1 ml-3 '>
            <View className='flex-row items-center'>
                <Text className='text-slate-100 font-subtitle text-base flex-1'>
                    {data.title}
                </Text>

                {
                    data.quantity && <Text className='text-slate-400 font-subtitle text-sm'>
                        x {data.quantity}
                    </Text>
                }
            </View>

            <Text className='text-slate-400 text-xs leading-5 mt-0.5'>
                {data.description}
            </Text>
        </View>
    </TouchableOpacity>
  )
})