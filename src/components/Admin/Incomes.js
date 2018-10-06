import React from 'react';
import '../../style/Admin/incomes.css'
import ShowDataIncomes from './Incomes/TableShowDataIncomes';
import FormIncomes from './Incomes/DialogFormAddDataIncomes';
import {AdminIncomeComponent} from "../index";


const Incomes = ({
                     onOpenDialogAdd,
                     showDataIncomes,
                     showDataIncomesCate,
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
                     incomeCate,
                     changeCate,
                     onChangeDateIncome,
                     onChangeInput,
                     onSubmitAddIncome,
                     onChangePage,
                     onChangeCate,
                     onsubmitCate,
                     isActive,
                     isOpenDialogAddIncomeDay,
                     onOpenDialocDay,
                     onCloseDialogDay,
                     onChangeDay,
                     onsubmitFormAddDay,
                     inComeDay,
                     receiveDataIncomeCateChange
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
                onChangeRowPage={onChangeRowPage}
                DataIncomesCate={showDataIncomesCate}
                onChangeCate={onChangeCate}
                onsubmitCate={onsubmitCate}
                changeCate={changeCate}
                onOpenDialocDay={onOpenDialocDay}
                receiveDataIncomeCateChange={receiveDataIncomeCateChange}/>

            {/*Dialog Form Incomes*/}
            <FormIncomes
                isOpenDialogAddIncome={isOpenDialogAddIncome}
                showDataIncomesCate={showDataIncomesCate}
                onCloseDialogAdd={onCloseDialogAdd}
                onChangeInput={onChangeInput}
                incomeName={incomeName}
                incomeDetail={incomeDetail}
                incomeAmount={incomeAmount}
                incomeDate={incomeDate}
                incomeCate={incomeCate}
                onChangeDateIncome={onChangeDateIncome}
                onSubmitAddIncome={onSubmitAddIncome}
                isActiveAmount={isActive}
                isOpenDialogAddIncomeDay={isOpenDialogAddIncomeDay}
                onCloseDialogDay={onCloseDialogDay}
                onChangeDay={onChangeDay}
                onsubmitFormAddDay={onsubmitFormAddDay}
                inComeDay={inComeDay}/>

        </div>
    );
};

export default Incomes;
