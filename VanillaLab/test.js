(function ($, $ctx) {
        'use strict';

        initTableNavi();

        function initTableNavi() {
            var columnCnt = 5;
            var totalPage = Math.ceil(10 / columnCnt);
            if (totalPage <= 1) return;

            var currentPage = 1;
            var offset = 5 - columnCnt;
            var $btns = $ctx.find('.paging_nav .btn_page');
            $btns.click(function() {
                var isPrev = $btns.index(this) === 0;
                currentPage = isPrev ? Math.max(currentPage - 1, 1) : Math.min(currentPage + 1, totalPage);
                if (currentPage === 1) {
                    $btns.eq(0).addClass('btn_off');
                } else {
                    $btns.eq(0).removeClass('btn_off');
                }
                if (currentPage === totalPage) {
                    $btns.eq(1).addClass('btn_off');
                } else {
                    $btns.eq(1).removeClass('btn_off');
                }

                var sliceIdx = ((currentPage - 1) * columnCnt) + offset;
                $ctx.find('.tbl_leec_type4 tr').each(function() {
                    var $this = $(this);
                    $this.find('td').slice(offset).addClass('hide');
                    $this.find('td').slice(sliceIdx, sliceIdx + columnCnt).removeClass('hide');
                });
            });
        }

})(jq, jq('#leecColl').eq(0));