import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function AnalyticsCardContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  // state의 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일(상태 값)
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));
  //useSelector를 사용한 함수에서 리덕스 스토어의 상태값이 바뀐 경우
  //( 버튼 클릭 등의 이벤트를 통해 액션이 실행되어 상태값이 변경된 경우) 
  //바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다

  // useDispatch 는 리덕스 스토어의 dispatch 를 함수에서 사용 할 수 있게 해주는 Hook
  const dispatch = useDispatch();

  // 각 액션들을 디스패치하는 함수들을 생성
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = diff => dispatch(setDiff(diff));

  return (
    <Counter
      // 상태와
      number={number}
      diff={diff}
      // 액션을 디스패치 하는 함수들을 props로 넣어줌
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default AnalyticsCardContainer;