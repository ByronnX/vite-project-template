import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useTeacherStore = defineStore('teacher', () => {
    // 组合式函数
    const teacherName = ref('王老师')
    const isWang = computed(() => {
        return teacherName.value === '王老师' ? '是王老师' : '不是王老师'
    })
    const praiseWang = computed(() => {
        return isWang.value === '是王老师' ? '表扬王老师！！！' : '不是王老师不表扬'
    })
    function changeTeacher() {
        teacherName.value = '张老师'
    }
    function addAge(age: number) {
        teacherName.value += teacherName.value + age
    }
    return { teacherName, isWang, praiseWang, changeTeacher, addAge }
})