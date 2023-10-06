import React ,{useEffect, useState} from 'react';
import './style.css';
import { usePagination } from 'hooks';
import { useNavigate, useParams } from 'react-router-dom';
import { relationWordListMock, searchListMock } from 'mocks';
import BoardItem from 'components/BoardItem';
import Pageination from 'components/Pagination';
import { SEARCH_PATH } from 'constant';
import { BoardListItem } from 'types';


//            component : 검색 페이지                //
export default function Search() {
  //            state : 검색어 path variable상태            //
  const{ word } = useParams();
  //            state : 검색 결과 개수 상태            //
  const [count, setCount] = useState<number>(0);
  //            state : 페이지네이션 관련 상태            //
  const {currentPageNumber, setCurrentPageNumber, currentSectionNumber, setCurrentSectionNumber,
    viewBoardList, viewPageNumberList, totalSection, setBoardList,} = usePagination<BoardListItem>(5);
  //            state : 연관 검색어 리스트 상태            //
  const [relationWordList, setRelationWordList] = useState<string[]>([]);

  //            function : 네비게이트 함수            //
  const navigator = useNavigate();

  //            event Handler : 관련검색어 뱃지 클릭 이벤트 처리            //
  const onWordBadgeClickHandler = (word : string) => {
    navigator(SEARCH_PATH(word));
  }
  
  //            effect : word path variable이 변경될 리스트 불러오기            //
  useEffect(() => {
    if (!word) return;
    const boardList = searchListMock(word);
    setBoardList(boardList);
    setCount(boardList.length);
    setRelationWordList(relationWordListMock);
  },[word])

  

  //            render : 검색 페이지 랜더링            //
  return (
    <div id='search-wrapper'>
      <div className='search-container'>
        <div className='search-title-box'>
          <div className='search-title'><span className='search-title-emphasis'>{word}</span>{'에 대한 검색결과 입니다.'}</div>
          <div className='search-count'>{count}</div>
        </div>
        <div className='search-contents-box'>
          {count === 0 ? (
          <div className='search-contents-result-nothing'>{'검색 결과가 없습니다.'}</div>
          ) : (
          <div className='search-contents-result-box'>
            {viewBoardList.map(boardItem => <BoardItem boardItem={boardItem}/> )}
          </div>
          )}
          <div className='search-relation-word-box'>
            <div className='search-relation-word-card'>
              <div className='search-relation-card-box'>
                <div className='search-relation-card-title'>{'관련검색어'}</div>
                { relationWordList.length === 0 ? (
                <div className='search-relation-card-contents-nothing'>{'관련 검색어가 없습니다.'}</div>
                ) : (
                <div className='search-relation-card-contents'>
                  {relationWordList.map(relationWord => <div className='word-badge' onClick={() => onWordBadgeClickHandler(relationWord)}>{relationWord}</div> )}
                </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {count !== 0 && (
          <div className='search-pagination-box'>
            <Pageination
              currentPageNumber = {currentPageNumber}
              currentSectionNumber = {currentSectionNumber}
              setCurrentPageNumber = {setCurrentPageNumber}
              setCurrentSectionNumber = {setCurrentSectionNumber}
              viewPageNumberList={viewPageNumberList}
              totalSection={totalSection}
            />
          </div>
        )}
       
      </div>
    </div>
  )
}
