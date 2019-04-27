// action creator : 액션을 동적으로 생성하는 평션
export const updateUser = (name) => ({
  type: 'updateUser',
  payload: {
    user: name
  }
});
