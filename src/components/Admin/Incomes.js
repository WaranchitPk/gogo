import React from 'react';
import '../../style/Admin/incomes.css'
import ShowDataIncomes from './Incomes/TableShowDataIncomes';
import FormIncomes from './Incomes/DialogFormAddDataIncomes';


const Incomes = ({
  onOpenDialogAdd,
  showDataIncomes,
  showDataIncomesLength,
  page,
  rowsPerPage,
  onChangeRowPage,
  isOpenDialogAddIncome,
  onCloseDialogAdd,
  incomeName,
  incomeDetail,
  incomeAmount,
  incomeDate,
  onChangeDateIncome,
  onChangeInput,
  onSubmitAddIncome,
  onChangePage
}) => {
  return (
    <div>
      {/*Table Show Data Incomes*/}
      <ShowDataIncomes
        onOpenDialogAdd={onOpenDialogAdd}
        showDataIncomes={showDataIncomes}
        showDataIncomesLength={showDataIncomesLength}
        page={page}
        rowsPerPage={rowsPerPage}
        onChangePage={onChangePage}
        onChangeRowPage={onChangeRowPage}/>

      {/*Dialog Form Incomes*/}
      <FormIncomes
        isOpenDialogAddIncome={isOpenDialogAddIncome}
        onCloseDialogAdd={onCloseDialogAdd}
        onChangeInput={onChangeInput}
        incomeName={incomeName}
        incomeDetail={incomeDetail}
        incomeAmount={incomeAmount}
        incomeDate={incomeDate}
        onChangeDateIncome={onChangeDateIncome}
        onSubmitAddIncome={onSubmitAddIncome}/>

    </div>
  );
};

export default Incomes;
