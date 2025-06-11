import { useCallback, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

export type PaginationType = {
  totalRecords?: number;
  pageLimit?: number;
  pageNeighbours?: number;
  onPageChanged?: any;
  isReset?: boolean;
  currentPage?: number;
  customResetFocusView?: boolean;
  customButton?: boolean;
};

const range = (from: any, to: any, step: any = 1) => {
  let i = from;
  const rangeData = [];

  while (i <= to) {
    rangeData.push(i);
    i += step;
  }

  return rangeData;
};

const Pagination = ({
  totalRecords = 0,
  pageLimit = 30,
  pageNeighbours = 1,
  onPageChanged = (f: any) => f,
  isReset = false,
  currentPage = 1,
  customResetFocusView = false,
  customButton,
}: PaginationType) => {
  const totalPages = Math.ceil(totalRecords / pageLimit);

  const gotoPage = useCallback(
    (page: any) => {
      let currPage = Math.max(0, Math.min(page, totalPages));

      if (page < 1) {
        currPage = 1;
      }

      const paginationData = {
        currentPage: currPage,
        totalPages,
        pageLimit,
        totalRecords,
      };

      onPageChanged(paginationData);
    },
    [totalPages, pageLimit, totalRecords, onPageChanged],
  );

  useEffect(() => {
    isReset && gotoPage(1);
  }, [isReset, gotoPage]);

  const handleClick = (page: any, evt: any) => {
    evt.preventDefault();
    !customResetFocusView && window.scrollTo({ top: 0, behavior: 'smooth' });
    gotoPage(page);
  };

  const handleMoveLeft = (evt: any) => {
    evt.preventDefault();
    !customResetFocusView && window.scrollTo({ top: 0, behavior: 'smooth' });
    gotoPage(currentPage - 1);
  };

  const handleMoveRight = (evt: any) => {
    evt.preventDefault();
    !customResetFocusView && window.scrollTo({ top: 0, behavior: 'smooth' });
    gotoPage(currentPage + 1);
  };

  const fetchPageNumbers = () => {
    const totalNumbers = pageNeighbours * 2 + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      let pages = [];

      const leftBound = currentPage - 3;
      const rightBound = currentPage + 3;
      const beforeLastPage = totalPages - 1;

      const startPage = leftBound > 2 ? leftBound : 2;
      const endPage = rightBound < beforeLastPage ? rightBound : beforeLastPage;

      pages = range(startPage, endPage);

      const pagesCount = pages.length;
      const singleSpillOffset = totalNumbers - pagesCount - 1;

      const leftSpill = startPage > 2;
      const rightSpill = endPage < beforeLastPage;

      const leftSpillPage = LEFT_PAGE;
      const rightSpillPage = RIGHT_PAGE;

      if (leftSpill && !rightSpill) {
        const extraPages = range(startPage - singleSpillOffset, startPage - 1);
        pages = [leftSpillPage, ...extraPages, ...pages];
      } else if (!leftSpill && rightSpill) {
        const extraPages = range(endPage + 1, endPage + singleSpillOffset);
        pages = [...pages, ...extraPages, rightSpillPage];
      } else if (leftSpill && rightSpill) {
        pages = [leftSpillPage, ...pages, rightSpillPage];
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  };

  const pages = fetchPageNumbers();

  if (pages.length === 0) {
    return (
      <div className="flex items-center h-[24px] text-sm text-gray-300 font-ubuntu">
        Loading...
      </div>
    );
  } else if (currentPage) {
    return (
      <>
        <div className="w-fit border rounded-lg overflow-hidden divide-x flex justify-between md:hidden font-ubuntu">
          <div
            className="cursor-pointer"
            onClick={(event: any) =>
              currentPage !== 1 && handleMoveLeft(event)
            }>
            <div className="py-2 px-4 text-paletteText-primary font-medium">
              <span className="">Previous</span>
            </div>
          </div>
          <div
            className="cursor-pointer"
            onClick={(event: any) =>
              totalPages !== currentPage && handleMoveRight(event)
            }>
            <div className="py-2 px-4 text-paletteText-primary font-medium">
              <span className="">Next</span>
            </div>
          </div>
        </div>

        <div className="w-fit items-center overflow-hidden hidden space-x-2 md:flex font-ubuntu">
          <div
            className={`px-2 flex items-center justify-center rounded ${
              currentPage !== 1
                ? 'cursor-pointer hover:bg-slate-200'
                : 'cursor-not-allowed'
            }`}
            onClick={(event: any) =>
              currentPage !== 1 && handleMoveLeft(event)
            }>
            <div
              className={`${customButton && currentPage === 1 ? 'flex rounded-full bg-[#D0D5DD] p-[14px]' : ''}`}>
              <FaChevronLeft
                className={`text-sm ${
                  currentPage !== 1
                    ? 'text-paletteText-primary'
                    : 'text-gray-300'
                } ${customButton && currentPage === 1 ? '!text-[#98A2B3]' : ''}`}
              />
            </div>
          </div>

          {pages.map((page, index) => {
            if (page === LEFT_PAGE) {
              return (
                <div className="cursor-default" key={`left_page-${index}`}>
                  <div className="px-2 text-paletteText-primary">
                    <span>...</span>
                  </div>
                </div>
              );
            }

            if (page === RIGHT_PAGE) {
              return (
                <div className="cursor-default" key={`right_page-${index}`}>
                  <div className="px-2 text-paletteText-primary">
                    <span>...</span>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={`pagination_page-${index}`}
                onClick={(e: any) => handleClick(page, e)}
                className={'cursor-pointer'}>
                <div
                  data-testid={`page-${page}`}
                  className={`px-2 text-paletteText-primary rounded ${
                    currentPage === page
                      ? `text-white bg-[#009EA9] hover:bg-secondary-20 ${customButton ? '!rounded-full !px-[16px] py-2' : ''}`
                      : 'hover:bg-slate-200'
                  }`}>
                  {page}
                </div>
              </div>
            );
          })}

          <div
            className={`px-2 flex items-center justify-center rounded ${
              totalPages !== currentPage
                ? 'cursor-pointer hover:bg-slate-200'
                : 'cursor-not-allowed'
            }`}
            onClick={(event: any) =>
              totalPages !== currentPage && handleMoveRight(event)
            }>
            <div
              className={`${customButton && totalPages === currentPage ? 'flex rounded-full bg-[#D0D5DD] p-[14px]' : ''}`}>
              <FaChevronRight
                className={`text-sm ${
                  totalPages !== currentPage
                    ? 'text-paletteText-primary'
                    : 'text-gray-300'
                } ${customButton && totalPages === currentPage ? '!text-[#98A2B3]' : ''}`}
              />
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
};

export default Pagination;
