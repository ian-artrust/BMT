<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Ardian Webi Kirda
|---------------------------------
*/
class M_datakaryawan extends CI_Model{
	private $connectionName;
	public function __construct(){
		parent::__construct();
	}
	public function setConnection($connectionName){
		$this->connectionName = $connectionName;
	}
	public function getConnection(){
		return $this->load->database($this->connectionName, TRUE);
	}

    public function nik($lebar=0, $awalan=''){
        $this->setConnection('dbsystem');
        $db     = $this->getConnection();
        $sql    = $db->select("*")->from('tm_karyawan')->order_by('nik', 'desc')->count_all();
        $query  = $db->get();
        $jml    = $query->num_rows();

        if($jml == 0)
            $nomor=1;
        else {
            $nomor = $jml+1;
        }
        if($lebar>0)
            $angka = $awalan.str_pad($nomor,$lebar,"0",STR_PAD_LEFT);
        else
            $angka = $awalan.$nomor;
        return $angka;
    }

	public function getGridDataKaryawan($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_karyawan AS id,
            u.nama_lengkap AS nama_lengkap,
            u.nik AS nik,
			u.id_jobname AS id_jobname,
			v.jobname AS jobname,
            u.card_id AS card_id,
            u.no_ktp AS no_ktp,
            u.no_tlp1 AS no_tlp1,
            u.no_tlp2 AS no_tlp2,
            u.alamat AS alamat,
            u.tgl_lahir AS tgl_lahir,
            u.tmp_lahir AS tmp_lahir,
            u.zip AS zip,
            u.email AS email,
            u.userfile AS userfile,
			u.active AS active,
            CASE WHEN u.active = 'Y' THEN 1 ELSE 0 END AS active", FALSE);
        $db->from('tm_karyawan u');
        $db->join('tm_jobname v', 'u.id_jobname=v.id_jobname');
        $db->order_by('u.nama_lengkap');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridDataKaryawan(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_karyawan AS id,
            u.nama_lengkap AS nama_lengkap,
            u.nik AS nik,
            u.id_jobname AS id_jobname,
            v.jobname AS jobname,
            u.card_id AS card_id,
            u.no_ktp AS no_ktp,
            u.no_tlp1 AS no_tlp1,
            u.no_tlp2 AS no_tlp2,
            u.alamat AS alamat,
            u.tgl_lahir AS tgl_lahir,
            u.tmp_lahir AS tmp_lahir,
            u.zip AS zip,
            u.email AS email,
            u.userfile AS userfile,
            u.active AS active,
            CASE WHEN u.active = 'Y' THEN 1 ELSE 0 END AS active", FALSE);
        $db->from('tm_karyawan u');
        $db->join('tm_jobname v', 'u.id_jobname=v.id_jobname');
        $db->order_by('u.nama_lengkap');
        $query = $db->get();
        return $query;
	}

	public function getUUID(){   
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->query('SELECT get_uuid() AS uuid;')->row()->uuid;
    }

    public function getID($id){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('*', FALSE)->from('tm_karyawan')->where('id_karyawan',$id)->get()->row();
    }

    public function cekData($nik){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS id', FALSE)->from('tm_karyawan')->where('nik',$nik)->get()->row()->id;
    }

     public function cekID($id){ 
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_karyawan')->where('id_karyawan',$id)->get()->row()->id;
    } 

    public function saveDataKaryawan($uuid, $nama_lengkap, $nik, $id_jobname, $card_id, $no_ktp, $no_tlp1, $no_tlp2, $tgl_lahir, $tmp_lahir, $zip, $email, $alamat, $active, $userfile){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('id_karyawan', $uuid);
        $db->set('nama_lengkap', $nama_lengkap);
        $db->set('nik', $nik);
        $db->set('id_jobname', $id_jobname);
        $db->set('card_id', $card_id);
        $db->set('no_ktp', $no_ktp);
        $db->set('no_tlp1', $no_tlp1);
        $db->set('no_tlp2', $no_tlp2);
        $db->set('tgl_lahir', $tgl_lahir);
        $db->set('tmp_lahir', $tmp_lahir);
        $db->set('zip', $zip);
        $db->set('email', $email);
        $db->set('alamat', $alamat);
        $db->set('active', $active);
        $db->set('userfile', $userfile);
        $db->insert('tm_karyawan');
    }

    public function updateDataKaryawanWP($id, $nama_lengkap, $id_jobname, $card_id, $no_ktp, $no_tlp1, $no_tlp2, $tgl_lahir, $tmp_lahir, $zip, $email, $alamat, $active){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $data = array(
                       'nama_lengkap'       => $nama_lengkap,
                       'id_jobname'         => $id_jobname,
                       'card_id'            => $card_id,
                       'no_ktp'             => $no_ktp,
                       'no_tlp1'           => $no_tlp1,
                       'no_tlp2'           => $no_tlp2,
                       'tgl_lahir'          => $tgl_lahir,
                       'tmp_lahir'          => $tmp_lahir,
                       'zip'                => $zip,
                       'email'              => $email,
                       'alamat'             => $alamat,                       
                       'active'             => $active
                    );
        $db->where('id_karyawan',$id);
        $db->update('tm_karyawan', $data);              
    }

    public function updateDataKaryawan($id, $nama_lengkap, $id_jobname, $card_id, $no_ktp, $no_tlp1, $no_tlp2, $tgl_lahir, $tmp_lahir, $zip, $email, $alamat, $active, $userfile){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $data = array(
                       'nama_lengkap'       => $nama_lengkap,
                       'id_jobname'         => $id_jobname,
                       'card_id'            => $card_id,
                       'no_ktp'             => $no_ktp,
                       'no_tlp1'           => $no_tlp1,
                       'no_tlp2'           => $no_tlp2,
                       'tgl_lahir'          => $tgl_lahir,
                       'tmp_lahir'          => $tmp_lahir,
                       'zip'                => $zip,
                       'email'              => $email,
                       'alamat'             => $alamat,                       
                       'active'             => $active,
                       'userfile'           => $userfile
                    );
        $db->where('id_karyawan',$id);
        $db->update('tm_karyawan', $data);              
    }

    public function deleteDataKaryawan($id){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('id_karyawan',$id);
        $db->delete('tm_karyawan');
    }

    public function searchDataKaryawan($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            u.id_karyawan AS id,
            u.nama_lengkap AS nama_lengkap,
            u.nik AS nik,
            u.id_jobname AS id_jobname,
            v.jobname AS jobname,
            u.card_id AS card_id,
            u.no_ktp AS no_ktp,
            u.no_tlp1 AS no_tlp1,
            u.no_tlp2 AS no_tlp2,
            u.alamat AS alamat,
            u.tgl_lahir AS tgl_lahir,
            u.tmp_lahir AS tmp_lahir,
            u.zip AS zip,
            u.email AS email,
            u.userfile AS userfile,
            u.active AS active,
            CASE WHEN u.active = 'Y' THEN 1 ELSE 0 END AS active", FALSE);
        $db->from('tm_karyawan u');
        $db->join('tm_jobname v', 'u.id_jobname=v.id_jobname');
        $db->like('LOWER(u.nik)', strtolower($name));
        $db->or_like('LOWER(u.nama_lengkap)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}