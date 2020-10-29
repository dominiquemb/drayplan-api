--
-- PostgreSQL database dump
--

-- Dumped from database version 10.9 (Ubuntu 10.9-0ubuntu0.18.10.1)
-- Dumped by pg_dump version 10.9 (Ubuntu 10.9-0ubuntu0.18.10.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: licenses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.licenses (
    id integer NOT NULL,
    license_key character varying(1000) NOT NULL,
    username character varying(100) NOT NULL,
    user_id integer NOT NULL,
    created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.licenses OWNER TO postgres;

--
-- Name: licenses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.licenses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.licenses_id_seq OWNER TO postgres;

--
-- Name: licenses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.licenses_id_seq OWNED BY public.licenses.id;


--
-- Name: provisioned_routers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provisioned_routers (
    id integer NOT NULL,
    router_id integer NOT NULL,
    mac_address character varying(100) NOT NULL,
    username character varying(100) NOT NULL,
    user_id integer NOT NULL,
    create_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.provisioned_routers OWNER TO postgres;

--
-- Name: provisioned_routers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.provisioned_routers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provisioned_routers_id_seq OWNER TO postgres;

--
-- Name: provisioned_routers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.provisioned_routers_id_seq OWNED BY public.provisioned_routers.id;


--
-- Name: routers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.routers (
    id integer NOT NULL,
    mac_address character varying(100) NOT NULL,
    created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.routers OWNER TO postgres;

--
-- Name: routers_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.routers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.routers_id_seq OWNER TO postgres;

--
-- Name: routers_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.routers_id_seq OWNED BY public.routers.id;


--
-- Name: transaction_queue; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaction_queue (
    id integer NOT NULL,
    sender character varying(100) NOT NULL,
    recipient character varying(100) NOT NULL,
    type character varying(100) NOT NULL,
    fulfilled integer NOT NULL,
    created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL
);


ALTER TABLE public.transaction_queue OWNER TO postgres;

--
-- Name: transaction_queue_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.transaction_queue_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.transaction_queue_id_seq OWNER TO postgres;

--
-- Name: transaction_queue_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.transaction_queue_id_seq OWNED BY public.transaction_queue.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    username character varying(100) NOT NULL,
    password character varying(100) NOT NULL,
    email character varying(100) NOT NULL,
    created_on timestamp without time zone DEFAULT CURRENT_TIMESTAMP NOT NULL,
    last_login timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: licenses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.licenses ALTER COLUMN id SET DEFAULT nextval('public.licenses_id_seq'::regclass);


--
-- Name: provisioned_routers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provisioned_routers ALTER COLUMN id SET DEFAULT nextval('public.provisioned_routers_id_seq'::regclass);


--
-- Name: routers id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.routers ALTER COLUMN id SET DEFAULT nextval('public.routers_id_seq'::regclass);


--
-- Name: transaction_queue id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction_queue ALTER COLUMN id SET DEFAULT nextval('public.transaction_queue_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: licenses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.licenses (id, license_key, username, user_id, created_on) FROM stdin;
\.


--
-- Data for Name: provisioned_routers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provisioned_routers (id, router_id, mac_address, username, user_id, create_on) FROM stdin;
1	1	test_mac	test_user	1	2020-09-17 00:07:25.674572
2	2	test_mac_202	test_user	1	2020-09-22 21:33:58.911024
3	3	test_mac_203	test_user	1	2020-09-22 21:34:05.515218
\.


--
-- Data for Name: routers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.routers (id, mac_address, created_on) FROM stdin;
1	test_mac	2020-09-20 00:32:48.69877
2	test_mac_202	2020-09-22 21:32:58.445035
3	test_mac_203	2020-09-22 21:33:00.709315
\.


--
-- Data for Name: transaction_queue; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.transaction_queue (id, sender, recipient, type, fulfilled, created_on) FROM stdin;
7	test_mac	test_user	configRequest	0	2020-09-22 20:09:23.19406
8	test_mac	test_user	configRequest	0	2020-09-22 20:10:08.820589
9	test_mac	test_user	configRequest	0	2020-09-22 20:17:50.664328
10	test_mac	test_user	configRequest	0	2020-09-22 20:17:50.663708
11	test_mac	test_user	configRequest	0	2020-09-22 20:18:26.434381
12	test_mac	test_user	configRequest	0	2020-10-04 22:08:08.744038
13	test_mac	test_user	configRequest	0	2020-10-04 22:08:08.745857
14	test_mac	test_user	configRequest	0	2020-10-04 22:08:08.748671
15	test_mac	test_user	configRequest	0	2020-10-04 22:09:42.671093
16	test_mac	test_user	configRequest	0	2020-10-04 22:09:42.673331
17	test_mac	test_user	configRequest	0	2020-10-04 22:09:42.675584
18	test_mac	test_user	configRequest	0	2020-10-04 22:09:42.6763
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, username, password, email, created_on, last_login) FROM stdin;
1	test_user	test	test@gmail.com	2020-09-20 00:32:16.407387	\N
\.


--
-- Name: licenses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.licenses_id_seq', 1, false);


--
-- Name: provisioned_routers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.provisioned_routers_id_seq', 3, true);


--
-- Name: routers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.routers_id_seq', 3, true);


--
-- Name: transaction_queue_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.transaction_queue_id_seq', 18, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 1, true);


--
-- Name: licenses licenses_license_key_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.licenses
    ADD CONSTRAINT licenses_license_key_key UNIQUE (license_key);


--
-- Name: licenses licenses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.licenses
    ADD CONSTRAINT licenses_pkey PRIMARY KEY (id);


--
-- Name: provisioned_routers provisioned_routers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provisioned_routers
    ADD CONSTRAINT provisioned_routers_pkey PRIMARY KEY (id);


--
-- Name: routers routers_mac_address_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.routers
    ADD CONSTRAINT routers_mac_address_key UNIQUE (mac_address);


--
-- Name: routers routers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.routers
    ADD CONSTRAINT routers_pkey PRIMARY KEY (id);


--
-- Name: transaction_queue transaction_queue_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction_queue
    ADD CONSTRAINT transaction_queue_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: users users_username_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_username_key UNIQUE (username);


--
-- PostgreSQL database dump complete
--

