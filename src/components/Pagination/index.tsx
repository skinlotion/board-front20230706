import React,{Dispatch,SetStateAction} from 'react';
import './style.css';

//            interface : 페이지네이션 컴포넌트 properties         //
interface Props {
  currentPageNumber : number;
  currentSectionNumber : number;
  setCurrentPageNumber : Dispatch<SetStateAction<number>>
  setCurrentSectionNumber : Dispatch<SetStateAction<number>>

  viewPageNumberList : number[];
  totalSection : number;
}

//            component : 페이지네이션 컴포넌트           //
export default function Pageination(props : Props) {

  //              state : Properties            //
  const {currentPageNumber, currentSectionNumber, setCurrentPageNumber, setCurrentSectionNumber } = props;
  const {viewPageNumberList, totalSection} = props;

  //            event handler : 페이지 번호 클릭 이벤트 처리            //
  const onPageNumberClickHandler = (pageNumber : number) => {
    setCurrentPageNumber(pageNumber);
  }
  //            event handler : 다음 버튼 클릭 이벤트 처리            //
  const onNextButtonClickHandler = () => {
    if(currentSectionNumber === totalSection) {
      alert('마지막 색션이다.')
      return;
    }
    setCurrentPageNumber(currentSectionNumber *10 +1);
    setCurrentSectionNumber(currentSectionNumber + 1);
  }
  //            event handler : 이전 버튼 클릭 이벤트 처리            //
  const onPreviousButtonClickHandler = () => {
    if(currentSectionNumber === 1) {
      alert('처음 색션이다.')
      return;
    }
    setCurrentPageNumber((currentSectionNumber - 1) * 10);
    setCurrentSectionNumber(currentSectionNumber - 1) ;
  }

  //            render : 페이지네이션 랜더링              // 
  return (
    <div className='pageination-container'>
      <div className='pageination-change-link-box' onClick={onPreviousButtonClickHandler}>
        <div className='pageination-change-link-icon-box'>
          <div className='left-light-icon'></div>
        </div>
        <div className='pageination-change-link-text'>{'이전'}</div>
      </div>
      <div className='pageination-divider'>{'\|'}</div>
       {viewPageNumberList.map(pageNumber => pageNumber === currentPageNumber ? <div className='pageination-active-text'>{pageNumber}</div> : <div className='pageination-text' onClick={() => onPageNumberClickHandler(pageNumber)}>{pageNumber}</div> )}
      <div className='pageination-divider'>{'\|'}</div>
      <div className='pageination-change-link-box' onClick={onNextButtonClickHandler}>
        <div className='pageination-change-link-text'>{'다음'}</div>
        <div className='pageination-change-link-icon-box'>
          <div className='right-light-icon'></div>
        </div>
      </div>
    </div>
  )
}
