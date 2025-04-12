import { create } from "zustand"

// 저장소 만듬 -> 가져와서 사용
// set은 저장소의 값을 변경시키고 싶을때 사용하는 함수
const counterStore = create((set)=>({
	count:1,
	increase:()=> set((state)=>({count: state.count + 1})),
	increaseBy:(value)=> set((state)=>({count: state.count + value})),
	decrease:()=> set((state)=>({count: state.count - 1})),
	decreaseBy:(value)=> set((state)=>({count: state.count - value})),
}))

export default counterStore