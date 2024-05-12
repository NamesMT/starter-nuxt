<script setup lang="ts">
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/lib/components/ui/carousel'

const colorMode = useColorMode()

const value1 = ref()
</script>

<template>
  <div class="h-screen flex flex-col items-center justify-center gap-4 text-center">
    <div class="flex items-center justify-center gap-2">
      <div>Theme:&nbsp;</div>
      <Button label="Test link" icon="pi pi-check" link />
      <Button
        :label="colorMode.preference"
        @click="colorMode.preference = (colorMode.preference !== 'dark')
          ? 'dark'
          : 'light'"
      />
      <InputNumber v-model="value1" input-id="integeronly" placeholder="Test input" />
    </div>

    <Carousel class="relative max-w-xs w-full">
      <CarouselContent>
        <CarouselItem v-for="(_, index) in 5" :key="index">
          <div class="p-1">
            <Card>
              <template #title>
                Simple Card #{{ index }}
              </template>
              <template #content>
                <p class="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
                  quas!
                </p>
              </template>
            </Card>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
</template>
