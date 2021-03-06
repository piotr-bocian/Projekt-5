import React, { cloneElement, useEffect, useReducer, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Button } from '@material-ui/core';
import useHttp from '../../../hooks/useHttp/useHttp';
import { httpMethods } from '../../../helpers/httpMethods/httpMethods';
import SelectPay from '../../Atoms/Select/Select';
import CircularLoader from '../../Loaders/CircularLoader/CircularLoader';
import httpReducer from '../../../helpers/httpReducer/httpReducer';
import { Center } from './AdministratorViewTemplate.styles';
import { administratorUsersConfig } from '../../../Config/administratorUsersConfigFile';
import { useAuth } from '../../../contexts/AuthContext';
import { URL } from '../../../helpers/URL/url';

const AdministratorViewTemplate = ({ administratorConfig, componentName }) => {
  const renderData = administratorConfig.configChildComponent;
  const makeState = administratorConfig.initialState;
  const initialState = {
    url: administratorConfig.url,
    request: 'GET',
    validate: null,
    payload: null,
  };
  const { authToken } = useAuth();
  const [state, dispatch] = useReducer(httpReducer, initialState);
  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [filter, setFilter] = useState('');
  const [id, setId] = useState('');
  const [search, setSearch] = useState('search');
  const [renderDataForUser, setRenderDataForUser] = useState(null);
  const [makeStateForUser, setMakeStateForUser] = useState(null);
  const querry = filter.length === 0 ? `${id}` : `?${search}=${filter}`;

  const { makeHttpRequest, isLoading } = useHttp(
    administratorConfig.url + querry,
    state.request,
    state.payload,
    state.validate,
    authToken
  );

  useEffect(() => {
    setFilter('');
    setId('');
    setSearch('');
  }, [administratorConfig.url]);

  useEffect(() => {
    const getData = async () => {
      const data = await makeHttpRequest();
      try {
        if (data[administratorConfig.dataKey[0]]) {
          setDataFromAPI(data[administratorConfig.dataKey[0]]);
        } else {
          setDataFromAPI(
            data[administratorConfig.dataKey[1]][administratorConfig.dataKey[2]]
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [filter, search, id, state, administratorConfig.dataKey]);

  //actions to api
  const searchBy = (e) => {
    setSearch(e.target.id);
    if (e.target.value === 'Tak' || e.target.value === 'Adoptowany') {
      return setFilter('true');
    } else if (
      e.target.value === 'Nie' ||
      e.target.value === 'Nie adoptowany'
    ) {
      return setFilter('false');
    }
    setFilter(e.target.value);
  };

  const onLoadAllData = async () => {
    setFilter('');
    setId('');
    setSearch('');
    setRenderDataForUser(null);
    setMakeStateForUser(null);
    dispatch({ type: httpMethods.GET });
  };

  const takeOneId = async (handler) => {
    const route = '/' + handler;
    const userIdRaw = await fetch(`${URL}/users` + route, {
      headers: {
        method: 'GET',
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'x-auth-token': authToken,
      },
    });
    const userId = await userIdRaw.json();
    console.log(userId);
    setDataFromAPI(userId);
    setRenderDataForUser(administratorUsersConfig.configChildComponent);
    setMakeStateForUser(administratorUsersConfig.initialState);
  };

  const deleteOne = async (handler) => {
    const route = '/' + handler;
    setId(route);
    setFilter('');
    setSearch('');
    setRenderDataForUser(null);
    setMakeStateForUser(null);
    dispatch({ type: httpMethods.DELETE });
  };

  const updateOne = async (handler, payload) => {
    const route = '/' + handler;
    setId(route);
    setFilter('');
    setSearch('');
    setRenderDataForUser(null);
    setMakeStateForUser(null);
    dispatch({
      type: httpMethods.PUT,
      validate: administratorConfig.validate,
      payload: payload,
    });
  };

  const patchOne = async (handler, payload) => {
    const route = '/' + handler;
    setId(route);
    setFilter('');
    setSearch('');
    setRenderDataForUser(null);
    setMakeStateForUser(null);
    dispatch({
      type: httpMethods.PATCH,
      validate: administratorConfig.validate,
      payload: payload,
    });
  };

  return isLoading ? (
    <Center>
      <CircularLoader />
    </Center>
  ) : (
    <>
      <Grid style={{ marginTop: '50px' }} container direction="row" spacing={3}>
        <Grid
          container
          item
          xs={12}
          spacing={3}
          justify="center"
          alignItems="center"
        >
          {administratorConfig.select.map((config, id) => {
            return (
              <SelectPay
                key={id}
                label={config.label}
                optionType={config.filterOptions}
                onChange={searchBy}
                id={config.id}
              />
            );
          })}
          <Button onClick={onLoadAllData}>
            {administratorConfig.buttonText}
          </Button>
        </Grid>

        <Grid
          container
          item
          xs={12}
          spacing={3}
          justify="center"
          alignItems="center"
        >
          {Array.isArray(dataFromAPI) && dataFromAPI.length !== 0
            ? dataFromAPI.map((data, id) => {
                return cloneElement(componentName, {
                  renderData: renderData,
                  createState: makeState,
                  payment: data,
                  key: id,
                  deletePayment: deleteOne,
                  updatePayment: updateOne,
                  patch: patchOne,
                  take: takeOneId,
                });
              })
            : cloneElement(componentName, {
                payment: dataFromAPI,
                key: id,
                renderData: renderDataForUser || renderData,
                createState: makeStateForUser || makeState,
              })}
        </Grid>
      </Grid>
    </>
  );
};

export default AdministratorViewTemplate;
