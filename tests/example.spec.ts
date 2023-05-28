import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest';
import App from '@/app.vue'
import {homeHeaderTitle} from "@/data/mainHeaders";

describe('App.vue', () => {
    it('renders a message', () => {
        const wrapper = mount(App)
        expect(wrapper.text()).toContain(homeHeaderTitle)
    })
})

