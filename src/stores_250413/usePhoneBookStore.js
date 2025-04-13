import { create } from 'zustand';

const usePhoneBookStore = create((set, get) => ({
  phoneBook: [],
  addContact: (name, phoneNumber) =>
    set((state) => ({
      // ...state.phoneBook 스프레드 연산자
      // => 기존 전화번호부에 새 연락처 추가
      // 배열에서 새로운 항목을 추가할 때는 기존 배열을 변경하지 않으면서 새로운 배열을 만들어 반환한다는 것이 중요!
      // 왜냐 ?? 상태를 직접 수정하면 React가 상태 변경을 감지하지 못할 수 있기 때문에, 항상 새로운 상태를 만들어서 변경하는 것이 중요!
      phoneBook: [...state.phoneBook, { id: Date.now(), name, phoneNumber }],
    })),
  removeContact: (id) =>
    set((state) => ({
      phoneBook: state.phoneBook.filter((contact) => contact.id !== id),
    })),
  searchContactsByName: (query) => {
    //.toLowerCase(); 소문자 / .toUpperCase() 대문자 변환
    return get().phoneBook.filter((contact) =>
      contact.name.includes(query)// 대소문자 구분
    );
  },
}));

export default usePhoneBookStore;