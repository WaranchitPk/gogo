import React from 'react';
import '../../style/Admin/incomes.css'
import ShowDataExpenses from './Expenses/TableShowDataExpenses';
import FormExpenses from './Expenses/DialogFormAddDataExpenses';
import ChartShowDataExpenses from './Expenses/PaperShowChartExpenses';

const Expenses = ({
                      year,
                      month,
                      onOpenDialogAdd,
                      showDataExpenses,
                      showDataExpensesLength,
                      page,
                      rowsPerPage,
                      onChangeRowPage,
                      isOpenDialogAddExpenses,
                      onCloseDialogAdd,
                      yearSelect,
                      monthSelect,
                      expensesName,
                      expensesDetail,
                      expensesAmount,
                      expensesDate,
                      onChangeDateExpenses,
                      onChangeInput,
                      onSubmitAddExpenses,
                      onChangePage,
                      onSelectYear,
                      onSelectMonth,
                      dataYearSelectExpenses,
                      dataMonthSelectExpenses,
                      dataExpensesCate,
                      onChangeCateToShowData,
                      expensesCateToShow,
                      onSubmitShowDataForCate,
                      expensesCateFormAdd
                  }) => {
    return (
        <div>
            {/*Chart Show Data Expenses*/}
            {/*<ChartShowDataExpenses*/}
            {/*year={yearSelect}*/}
            {/*month={monthSelect}*/}
            {/*onSelectYear={onSelectYear}*/}
            {/*onSelectMonth={onSelectMonth}*/}
            {/*dataYearSelectExpenses={dataYearSelectExpenses}*/}
            {/*dataMonthSelectExpenses={dataMonthSelectExpenses}/>*/}
            {/*Table Show Data Expenses*/}
            <ShowDataExpenses
                onOpenDialogAdd={onOpenDialogAdd}
                showDataExpeses={showDataExpenses}
                showDataExpesesLength={showDataExpensesLength}
                page={page}
                rowsPerPage={rowsPerPage}
                onChangePage={onChangePage}
                onChangeRowPage={onChangeRowPage}
                year={year}
                month={month}
                onSelectYear={onSelectYear}
                onSelectMonth={onSelectMonth}
                dataYearSelectExpenses={dataYearSelectExpenses}
                dataMonthSelectExpenses={dataMonthSelectExpenses}
                dataExpensesCate={dataExpensesCate}
                onChangeCateToShowData={onChangeCateToShowData}
                expensesCateToShow={expensesCateToShow}
                onSubmitShowDataForCate={onSubmitShowDataForCate}/>

            {/*Dialog Form Expenses*/}
            <FormExpenses
                isOpenDialogAddExpenses={isOpenDialogAddExpenses}
                onCloseDialogAdd={onCloseDialogAdd}
                onChangeInput={onChangeInput}
                expensesName={expensesName}
                expensesDetail={expensesDetail}
                expensesAmount={expensesAmount}
                expensesDate={expensesDate}
                onChangeDateexpenses={onChangeDateExpenses}
                onSubmitAddexpenses={onSubmitAddExpenses}
                dataExpensesCate={dataExpensesCate}
                expensesCateFormAdd={expensesCateFormAdd}/>
        </div>
    );
};

export default Expenses;
