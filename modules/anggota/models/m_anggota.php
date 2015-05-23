<?php (defined('BASEPATH')) OR exit('No direct script access allowed');
/*
|---------------------------------
| Ardian Webi Kirda 
| Copyright Ardian Webi Kira 
| Created By ian  18-01-2015
| Supported by Ardian Webi Kirda
|---------------------------------
*/
class M_anggota extends CI_Model{
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

    public function code($lebar=0, $awalan=''){
        $this->setConnection('dbsystem');
        $db     = $this->getConnection();
        $sql    = $db->select("*")->from('tm_anggota')->order_by('code_anggota', 'asc')->count_all();
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

	public function getGridAnggota($limit, $offset){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
			u.id_anggota AS id,
            u.nama_lengkap AS nama_lengkap,
            u.code_anggota AS code_anggota,
            u.card_id AS card_id,
            u.no_ktp AS no_ktp,
            u.tgl_lahir AS tgl_lahir,
            u.tmp_lahir AS tmp_lahir,
			u.gender AS gender,
			u.pekerjaan AS pekerjaan,
            u.phone AS phone,
            u.alamat AS alamat,
            u.kecamatan AS kecamatan,
            u.desa AS desa,
            u.zip AS zip,
            u.nama_waris AS nama_waris,
            u.hubungan AS hubungan,
            u.alamat_waris AS alamat_waris,
            u.id_karyawan AS id_karyawan,
            u.userfile AS userfile,
			u.active AS active,
            CASE WHEN u.active = 'Y' THEN 1 ELSE 0 END AS active", FALSE);
        $db->from('tm_anggota u');
        $db->order_by('u.nama_lengkap');
        $db->limit($offset, $limit);
        $query = $db->get();
        return $query;
	}

	public function countGridAnggota(){
		$this->setConnection('dbsystem');
		$db = $this->getConnection();

		$db->select("
            u.id_anggota AS id,
            u.nama_lengkap AS nama_lengkap,
            u.code_anggota AS code_anggota,
            u.card_id AS card_id,
            u.no_ktp AS no_ktp,
            u.tgl_lahir AS tgl_lahir,
            u.tmp_lahir AS tmp_lahir,
            u.gender AS gender,
            u.pekerjaan AS pekerjaan,
            u.phone AS phone,
            u.alamat AS alamat,
            u.kecamatan AS kecamatan,
            u.desa AS desa,
            u.zip AS zip,
            u.nama_waris AS nama_waris,
            u.hubungan AS hubungan,
            u.alamat_waris AS alamat_waris,
            u.id_karyawan AS id_karyawan,
            u.userfile AS userfile,
            u.active AS active,
            CASE WHEN u.active = 'Y' THEN 1 ELSE 0 END AS active", FALSE);
        $db->from('tm_anggota u');
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
        return $db->select('*', FALSE)->from('tm_anggota')->where('id_karyawan',$id)->get()->row();
    }

    public function cekData($code_anggota){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
    	return $db->select('COUNT(*) AS id', FALSE)->from('tm_anggota')->where('code_anggota',$code_anggota)->get()->row()->id;
    }

     public function cekID($id){ 
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        return $db->select('COUNT(*) AS id', FALSE)->from('tm_anggota')->where('id_karyawan',$id)->get()->row()->id;
    } 

    public function saveAnggota($uuid, $nama_lengkap, $code_anggota, $card_id, $no_ktp, $tgl_lahir, $tmp_lahir, 
                $gender, $pekerjaan, $phone, $alamat, $kecamatan, $desa, $zip, $nama_waris, 
                $hubungan, $alamat_waris, $id_karyawan, $active, $userfile){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->set('id_anggota', $uuid);
        $db->set('nama_lengkap', $nama_lengkap);
        $db->set('code_anggota', $code_anggota);
        $db->set('card_id', $card_id);
        $db->set('no_ktp', $no_ktp);
        $db->set('tgl_lahir', $tgl_lahir);
        $db->set('tmp_lahir', $tmp_lahir);
        $db->set('gender', $gender);
        $db->set('pekerjaan', $pekerjaan);
        $db->set('phone', $phone);
        $db->set('alamat', $alamat);
        $db->set('kecamatan', $kecamatan);
        $db->set('desa', $desa);
        $db->set('zip', $zip);
        $db->set('nama_waris', $nama_waris);
        $db->set('hubungan', $hubungan);
        $db->set('alamat_waris', $alamat_waris);
        $db->set('id_karyawan', $id_karyawan);
        $db->set('active', $active);
        $db->set('userfile', $userfile);
        $db->set('createdby', $this->session->userdata('id'));
        $db->set('created', date('Y-m-d H:i:s'));
        $db->set('updatedby', $this->session->userdata('id'));
        $db->set('updated', date('Y-m-d H:i:s'));
        $db->insert('tm_anggota');
    }

    public function updateAnggotaWP($id, $nama_lengkap, $code_anggota, $card_id, $no_ktp, $tgl_lahir, $tmp_lahir, 
                $gender, $pekerjaan, $phone, $alamat, $kecamatan, $desa, $zip, $nama_waris, 
                $hubungan, $alamat_waris, $id_karyawan, $active){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $data = array(
                'nama_lengkap'  => $nama_lengkap,
                'code_anggota'  => $code_anggota,
                'card_id'       => $card_id,
                'no_ktp'        => $no_ktp,
                'tgl_lahir'     => $tgl_lahir,
                'tmp_lahir'     => $tmp_lahir,
                'gender'        => $gender,
                'pekerjaan'     => $pekerjaan,
                'phone'         => $phone,
                'alamat'        => $alamat,
                'kecamatan'     => $kecamatan,
                'desa'          => $desa,
                'zip'           => $zip,
                'nama_waris'    => $nama_waris,
                'hubungan'      => $hubungan,
                'alamat_waris'  => $alamat_waris,
                'id_karyawan'   => $id_karyawan,
                'active'        => $active,
                'updated'       => date('Y-m-d H:i:s'),
                'updatedby'     => $this->session->userdata('id')
            );
            $db->where('id_anggota',$id);
            $db->update('tm_anggota', $data);              
    }

    public function updateAnggota($id, $nama_lengkap, $code_anggota, $card_id, $no_ktp, $tgl_lahir, $tmp_lahir, 
                $gender, $pekerjaan, $phone, $alamat, $kecamatan, $desa, $zip, $nama_waris, 
                $hubungan, $alamat_waris, $id_karyawan, $active, $userfile){
        $this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $data = array(
                        'nama_lengkap'  => $nama_lengkap,
                        'code_anggota'  => $code_anggota,
                        'card_id'       => $card_id,
                        'no_ktp'        => $no_ktp,
                        'tgl_lahir'     => $tgl_lahir,
                        'tmp_lahir'     => $tmp_lahir,
                        'gender'        => $gender,
                        'pekerjaan'     => $pekerjaan,
                        'phone'         => $phone,
                        'alamat'        => $alamat,
                        'kecamatan'     => $kecamatan,
                        'desa'          => $desa,
                        'zip'           => $zip,
                        'nama_waris'    => $nama_waris,
                        'hubungan'      => $hubungan,
                        'alamat_waris'  => $alamat_waris,
                        'id_karyawan'   => $id_karyawan,
                        'active'        => $active,
                        'userfile'      => $userfile,
                        'updated'       => date('Y-m-d H:i:s'),
                        'updatedby'     => $this->session->userdata('id')
                    );
        $db->where('id_anggota',$id);
        $db->update('tm_anggota', $data);              
    }

    public function deleteAnggota($id){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();
        $db->where('id_anggota',$id);
        $db->delete('tm_anggota');
    }

    public function searchAnggota($name){
    	$this->setConnection('dbsystem');
        $db   = $this->getConnection();

       $db->select("
            u.id_anggota AS id,
            u.nama_lengkap AS nama_lengkap,
            u.code_anggota AS code_anggota,
            u.card_id AS card_id,
            u.no_ktp AS no_ktp,
            u.tgl_lahir AS tgl_lahir,
            u.tmp_lahir AS tmp_lahir,
            u.gender AS gender,
            u.pekerjaan AS pekerjaan,
            u.phone AS phone,
            u.alamat AS alamat,
            u.kecamatan AS kecamatan,
            u.desa AS desa,
            u.zip AS zip,
            u.nama_waris AS nama_waris,
            u.hubungan AS hubungan,
            u.alamat_waris AS alamat_waris,
            u.id_karyawan AS id_karyawan,
            u.userfile AS userfile,
            u.active AS active,
            CASE WHEN u.active = 'Y' THEN 1 ELSE 0 END AS active", FALSE);
        $db->from('tm_anggota u');
        $db->like('LOWER(u.code_anggota)', strtolower($name));
        $db->or_like('LOWER(u.nama_lengkap)', strtolower($name));
        $query = $db->get();
        return $query;
    }
}