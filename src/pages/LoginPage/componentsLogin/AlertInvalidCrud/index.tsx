import { ColAlertInvalidCrud, RowAlertInvalidCrud } from './styles';

const AlertInvalidCrud = () => {
  return (
    <RowAlertInvalidCrud>
      <ColAlertInvalidCrud>
        <div className="alert-danger">
          <p>Email ou senha inválidos</p>
        </div>
      </ColAlertInvalidCrud>
    </RowAlertInvalidCrud>
  );
};

export { AlertInvalidCrud };
