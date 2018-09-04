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
  dataMonthSelectExpenses
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
        dataMonthSelectExpenses={dataMonthSelectExpenses}/>

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
        onSubmitAddexpenses={onSubmitAddExpenses}/>
    </div>
  );
};

export default Expenses;
