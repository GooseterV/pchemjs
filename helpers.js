export const MEASUREMENTS = {
	time:["second", {
		nanosecond:1/1e9,
		microsecond:1/1e6,
		millisecond:1/1e3,
		second:1,
		minute:60,
		hour:60*60,
		day:60*60*24,
		week:60*60*24*7,
		month:60*60*24*30,
		year:60*60*24*365,
		decade:60*60*24*365*10,
		century:60*60*24*365*100,
		millenia:60*60*24*365*1e3
	}],
	length:["meter", {
		femtometer:1/1e15,
		picometer:1/1e12,
		nanometer:1/1e9,
		micrometer:1/1e6,
		millimeter:1/1e3,
		centimeter:1/100,
		meter:1,
		kilometer:1e3,
		foot:3.281,
		mile:3.281*5280,
		yard:3.281*3,
		inch:3.281/12
	}],
	mass:["gram", {
		microgram:1/1e6,
		milligram:1/1e3,
		gram:1,
		kilogram:1e3,
		pound:453.592,
		metric_ton:1e6,
		imperial_ton:1.016e+6,
		us_ton:907185,
		stone:6350.29,
		ounce:28.3495
	}],
	volume:["liter", {
		milliliter:1e-3,
		liter:1,
		kiloliter:1e3,
		cubic_meter:1e3,
		us_teaspoon:1/202.884,
		us_tablespoon:1/67.628,
		us_fluid_ounce:1/33.814,
		us_legal_cup:1/4.167,
		us_liquid_pint:1/2.1138,
		us_liquid_quart:1/1.057,
		us_liquid_gallon:3.78541,
		imperial_gallon:4.54609,
		imperial_quart:1.13652,
		imperial_pint:1/1.76,
		imperial_cup:1/3.52,
		imperial_fluid_ounce:1/35.195,
		imperial_tablespoon:1/56.312,
		imperial_teaspoon:1/168.9,
		cubic_foot:28.3168,
		cubic_inch:1/61.024
	}],
	pressure:["pascal", {
		pascal:1,
		bar:1e5,
		psi:6894.76,
		atmosphere:101325,
		torr:133.322
	}],
	storage:["byte", {
		bit:1/8,
		kilobit:1e3/8,
		megabit:1e6/8,
		gigabit:1e9/8,
		terrabit:1e12/8,
		nibble:0.5,
		byte:1,
		word:2,
		block:512,
		kilobyte:1e3,
		megabyte:1e6,
		gigabyte:1e9,
		terrabyte:1e12,
		kibibyte:1024,
		mebibyte:1024*1024,
		gibibyte:1024*1024*1024,
		tebibyte:1024*1024*1024*1024,
		kibibit:128,
		mebibit:131072,
		gibibit:1.342e+8,
		tebibit:1.374e11
	}],
	energy:["joule", {
		joule:1,
		kilojoule:1e3,
		kilocalorie:4184,
		gram_calorie:4.184,
		watt_hour:3600,
		kilowatt_hour:3.6e6,
		electronvolt:1.6022e-19
	}],
	frequency:["hertz", {
		hertz:1,
		kilohertz:1e3,
		megahertz:1e6,
		gigahertz:1e9,
		bps:1,
		bpm:1/60

	}]
};

export const ELECTRICAL_VARIABLES = {
	voltage:{
		measurement:"volt",
		symbol:["V", "E"],
		formula:"I*R"
	},
	current:{
		measurement:"ampere",
		symbol:["I", "i"],
		formula:"V/R"
	},
	resistance:{
		measurement:"ohm",
		symbol:["R", "Ω"],
		formula:"V/I"
	},
	conductance:{
		measurement:"siemen",
		symbol:["G", "℧"],
		formula:"1/R"
	},
	capacitance:{
		measurement:"farad",
		symbol:["C"],
		formula:"Q/V"
	},
	charge:{
		measurement:"coulomb",
		symbol:["Q"],
		formula:"C*V"
	},
	inductance:{
		measurement:"henry",
		symbol:["L", "H"],
		formula:""
	},
	power:{
		measurement:"watt",
		symbol:["W"],
		formula:"V*I",
		formulas:["V*I", "(I**2)*R"]
	},
	impendance:{
		measurement:"ohm",
		symbol:["Z"],
		formula:"sqrt(R**2+X**2)"
	}
};

export const DECADES_TO_YEARS = (i)=>i*10;
export const YEARS_TO_MONTHS = (i)=>i*12;
export const YEARS_TO_WEEKS = (i)=>i*52;
export const YEARS_TO_DAYS = (i)=>i*365;
export const DAYS_TO_HOURS = (i)=>i*24;
export const HOURS_TO_MINUTES = (i)=>i*60;
export const MINUTES_TO_SECONDS = (i)=>i*60;
export const SECONDS_TO_MS = (i)=>i*1e3;
export const HOURS_TO_SECONDS = (i)=>MINUTES_TO_SECONDS(i)*60;
export const DAYS_TO_SECONDS = (i)=>HOURS_TO_SECONDS(i)*24;
export const WEEKS_TO_SECONDS = (i)=>DAYS_TO_SECONDS(i)*7;
export const MONTHS_TO_SECONDS = (i)=>DAYS_TO_SECONDS(i)*30;
export const YEARS_TO_SECONDS = (i)=>MONTHS_TO_SECONDS(i)*12;

export const KM_TO_METERS = (i)=>i/1e3;
export const METERS_TO_CM = (i)=>i*100;
export const METERS_TO_MM = (i)=>i*1e3;
export const METERS_TO_UM = (i)=>i*1e6;
export const METERS_TO_NM = (i)=>i*1e9;
export const METERS_TO_PM = (i)=>i*1e12;
export const METERS_TO_FEET = (i)=>i*3.281;
export const FEET_TO_METERS = (i)=>i/3.281;
export const YARDS_TO_FEET = (i)=>i*3;
export const MILES_TO_FEET = (i)=>i*5280;
export const KM_TO_MILES = (i)=>i/1.609;
export const MILES_TO_KM = (i)=>i*1.609;
export const FEET_TO_INCHES = (i)=>i*12;
export const INCHES_TO_FEET = (i)=>i/12;
export const CM_TO_INCHES = (i)=>i/2.54;
export const INCHES_TO_CM = (i)=>i*2.54;
export const MILES_TO_NAUTICAL = (i)=>i*1.151;
export const NAUTICAL_TO_MILES = (i)=>i/1.151;
export const LSECOND_TO_METERS = (i)=>i*299792458;
export const LMINUTE_TO_METERS = (i)=>LSECOND_TO_METERS(i)*60;
export const LHOUR_TO_METERS = (i)=>LMINUTE_TO_METERS(i)*60;
export const LDAY_TO_METERS = (i)=>LHOUR_TO_METERS(i)*24;
export const LWEEK_TO_METERS = (i)=>LDAY_TO_METERS(i)*7;
export const LMONTH_TO_METERS = (i)=>LDAY_TO_METERS(i)*30;
export const LYEAR_TO_METERS = (i)=>LWEEK_TO_METERS(i)*52;
export const METERS_TO_LYEARS = (i)=>i/60/60/24/7/52;

export const KG_TO_GRAMS = (i)=>i*1000;
export const GRAMS_TO_KG = (i)=>i/1000;
export const GRAMS_TO_MG = (i)=>i*1000;
export const MG_TO_GRAMS = (i)=>i/1000;
export const LBS_TO_KG = (i)=>i/2.205;
export const KG_TO_LBS = (i)=>i*2.205;
export const US_TONS_TO_LBS = (i)=>i*2e3;
export const LBS_TO_US_TONS = (i)=>i/2e3;
export const US_TONS_TO_M_TONS = (i)=>i/1.102;
export const M_TONS_TO_US_TONS = (i)=>i*1.102;
export const LBS_TO_OZ = (i)=>i*16;
export const OZ_TO_LBS = (i)=>i/16;
export const LBS_TO_N = (i)=>i*4.448;
export const N_TO_LBS = (i)=>i/4.448;
export const LBS_TO_STONES = (i)=>i/14;
export const STONES_TO_LBS = (i)=>i*14;

export const LITERS_TO_ML = (i)=>i*1000;
export const LITERS_TO_KL = (i)=>i/1000;
export const KL_TO_LITERS = (i)=>i*1000;
export const ML_TO_LITERS = (i)=>i*1000;
export const US_GALLONS_TO_IMP_GALLONS = (i)=>i/1.201;
export const IMP_GALLONS_TO_US_GALLONS = (i)=>i*1.201;
export const GALLONS_TO_QUARTS = (i)=>i*4;
export const QUARTS_TO_GALLONS = (i)=>i/4;
export const QUARTS_TO_PINTS = (i)=>i*2;
export const PINTS_TO_QUARTS = (i)=>i/2;
export const PINTS_TO_CUPS = (i)=>i*2;
export const CUPS_TO_PINTS = (i)=>i/2;
export const CUPS_TO_OUNCES = (i)=>i*10;
export const OUNCES_TO_CUPS = (i)=>i/10;
export const CUPS_TO_TABLESPOONS = (i)=>i*16;
export const TABLESPOONS_TO_CUPS = (i)=>i/16;
export const TABLESPOONS_TO_TEASPOONS = (i)=>i*3;
export const TEASPOONS_TO_TABLESPOONS = (i)=>i/3;

export const BYTES_TO_BITS = (i)=>i*8;
export const BITS_TO_BYTES = (i)=>i/8;
export const KB_TO_BYTES = (i)=>i*1024;
export const MB_TO_KB = (i)=>i*1024;
export const GB_TO_MB = (i)=>i*1024;
export const TB_TO_GB = (i)=>i*1024;
export const PB_TO_TB = (i)=>i*1024;

export const F_TO_C = (i)=>(i-32)*(5/9);
export const C_TO_F = (i)=>i*(9/5)+32;
export const C_TO_KELVIN = (i)=>i+273.15;
export const KELVIN_TO_C = (i)=>i-273.15;

export const JOULES_TO_KJ = (i)=>i/1e3;
export const KJ_TO_JOULES = (i)=>i*1e3;
export const JOULES_TO_KILOCALS = (i)=>i/4184;
export const KILOCALS_TO_JOULES = (i)=>i*4184;
export const KILOCALS_TO_GCALS = (i)=>i*1e3;
export const GCALS_TO_KILOCALS = (i)=>i/1e3;
export const JOULES_TO_KWHOURS = (i)=>i/3.6e6;
export const KWHOURS_TO_JOULES = (i)=>i*3.6e6;
export const WAT_HOURS_TO_KWHOURS = (i)=>i/1e3;
export const KWHOURS_TO_WAT_HOURS = (i)=>i*1e3;
export const JOULES_TO_ELECTRONVOLT = (i)=>i/6.242e18;
export const ELECTRONVOLT_TO_JOULES = (i)=>i*6.242e18;

export const HERTZ_TO_KHZ = (i)=>i/1e3;
export const KHZ_TO_HERTZ = (i)=>i*1e3;
export const MHZ_TO_KHZ = (i)=>i*1e3;
export const KHZ_TO_MHZ = (i)=>i/1e3;
export const GHZ_TO_MHZ = (i)=>i*1e3;
export const MHZ_TO_GHZ = (i)=>i/1e3;
export const HERTZ_TO_BPM = (i)=>i*60;
export const BPM_TO_HERTZ = (i)=>i/60;

export const PASCALS_TO_BARS = (i)=>i/1e5;
export const BARS_TO_PASCALS = (i)=>i*1e5;
export const PASCALS_TO_PSI = (i)=>i/6895;
export const PSI_TO_PASCALS = (i)=>i*6895;
export const PASCALS_TO_ATMOSPHERES = (i)=>i/101325;
export const ATMOSPHERES_TO_PASCALS = (i)=>i*101325;
export const PASCALS_TO_TORRS = (i)=>i/133.3;
export const TORRS_TO_PASCALS = (i)=>i*133.3;

export const DEGREES_TO_RADIANS = (i)=>i*Math.PI/180;
export const RADIANS_TO_DEGREES = (i)=>i*180/Math.PI;
export const DEGREES_TO_GRADIANS = (i)=>i*200/180;
export const GRADIANS_TO_DEGREES = (i)=>i*180/200;
export const DEGREES_TO_MINUTEARC = (i)=>i*60;
export const MINUTEARC_TO_DEGREES = (i)=>i/60;
export const DEGREES_TO_SECONDARC = (i)=>i*3600;
export const SECONDARC_TO_DEGREES = (i)=>i/3600;
export const RADIANS_TO_MILLIRADIANS = (i)=>i*1e3;
export const MILLIRADIANS_TO_RADIANS = (i)=>i/1e3;

